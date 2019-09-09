import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment-timezone';

import * as S from './styles';

function getOptions() {
  const options = [];
  const baseTime = '2019-09-21 09:15';
  for (let i = 0; i < 9; i += 1) {
    const round = i + 1;
    const roundStartTime = moment
      .tz(baseTime, 'Asia/Seoul')
      .add((15 * Math.floor((round - 1) / 3)).toString(), 'minutes');

    options.push(
      <option
        key={i}
        value={round}
        // disabled={false}
      >
        {round}대 ({roundStartTime.format('hh:mm')} 개사)
      </option>
    );
  }
  return options;
}

export default function SemiproApplyForm({ onSubmit }) {
  return (
    <S.Form>
      <h2>실업부 신청하기</h2>
      <Formik
        initialValues={{
          name: '',
          range: '',
          city: '',
          mobile: '',
          round: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('이름을 입력해 주세요.'),
          range: Yup.string().required('소속 활터를 입력해 주세요.'),
          city: Yup.string().required('시/군/구를 입력해 주세요.'),
          mobile: Yup.string()
            .required('휴대폰 번호를 입력해 주세요.')
            .matches(
              /^([0-9]{3})([0-9]{3,4})([0-9]{4})$/,
              '유효하지 않은 휴대폰 번호 입니다.'
            ),
          round: Yup.string().required('작대를 선택해 주세요.'),
          password: Yup.string()
            .required('비밀번호를 입력해 주세요.')
            .min(4, '최소 4자 이상 입력해 주세요.'),
          confirmPassword: Yup.string()
            .required('비밀번호 확인을 입력해 주세요.')
            .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        })}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => {
          return (
            <Form>
              <div>
                <label htmlFor="name">이름</label>
                <Field id="name" type="text" name="name" />
                <ErrorMessage name="name" component="span" />
              </div>

              <div>
                <label htmlFor="range">소속 활터</label>
                <Field type="text" name="range" />
                <ErrorMessage name="range" component="span" />
              </div>

              <div>
                <label htmlFor="city">시/군/구</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="span" />
              </div>

              <div>
                <label htmlFor="mobile">휴대폰 번호</label>
                <Field
                  type="tel"
                  name="mobile"
                  placeholder="-없이 입력해 주세요. e.g. 01012342345"
                />
                <ErrorMessage name="mobile" component="span" />
              </div>

              <div>
                <label htmlFor="round">작대</label>
                <Field id="round" component="select" name="round">
                  <option value="" disabled>
                    작대를 선택해 주세요
                  </option>
                  {getOptions()}
                </Field>
                <ErrorMessage name="round" component="span" />
              </div>

              <div>
                <label htmlFor="password">
                  비밀번호
                  <span>(신청 내용 수정/삭제에 사용합니다)</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="4자 이상 입력해 주세요."
                />
                <ErrorMessage name="password" component="span" />
              </div>

              <div>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" component="span" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                등록하기
              </button>
            </Form>
          );
        }}
      </Formik>
    </S.Form>
  );
}
