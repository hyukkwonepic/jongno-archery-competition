import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import * as S from './styles';

export default function IndividualApplyForm() {
  return (
    <S.Form>
      <h2>개인전 신청하기</h2>
      <Formik
        initialValues={{
          name: '',
          range: '',
          city: '',
          mobile: '',
          date: '',
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
          date: Yup.string().required('날짜를 선택해 주세요.'),
          round: Yup.string().required('작대를 선택해 주세요.'),
          password: Yup.string()
            .required('비밀번호를 입력해 주세요.')
            .min(4, '최소 4자 이상 입력해 주세요.'),
          confirmPassword: Yup.string()
            .required('비밀번호 확인을 입력해 주세요.')
            .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            window.alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
                <label htmlFor="date">날짜</label>
                <Field
                  name="date"
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={e => {
                        setFieldValue('round', '', false);
                        field.onChange(e);
                      }}
                    >
                      <option value="" disabled>
                        날짜를 선택해 주세요
                      </option>
                      <option value="21">9월 21일 토요일 (1 ~ 9대)</option>
                      <option value="22">9월 22일 일요일 (10 ~ 45대)</option>
                    </select>
                  )}
                />
                <ErrorMessage name="date" component="span" />
              </div>

              <div>
                <label htmlFor="round">작대</label>
                <Field id="round" component="select" name="round">
                  {values.date === '21' ? (
                    <>
                      <option value="" disabled>
                        작대를 선택해 주세요
                      </option>
                      <option value="1">1대 (07:00 개사)</option>
                      <option value="2">2대 (07:00 개사)</option>
                      <option value="3">3대 (07:00 개사)</option>
                      <option value="4">4대 (07:15 개사)</option>
                      <option value="5">5대 (07:15 개사)</option>
                      <option value="6">6대 (07:15 개사)</option>
                      <option value="7">7대 (07:30 개사)</option>
                      <option value="8">8대 (07:30 개사)</option>
                      <option value="9">9대 (07:30 개사)</option>
                    </>
                  ) : (
                    <>
                      <option value="" disabled>
                        작대를 선택해 주세요
                      </option>
                      <option value="1">10대 (07:00 개사)</option>
                      <option value="2">11대 (07:00 개사)</option>
                      <option value="3">12대 (07:00 개사)</option>
                      <option value="4">13대 (07:15 개사)</option>
                      <option value="5">14대 (07:15 개사)</option>
                      <option value="6">15대 (07:15 개사)</option>
                      <option value="7">16대 (07:30 개사)</option>
                      <option value="8">17대 (07:30 개사)</option>
                      <option value="9">18대 (07:30 개사)</option>
                    </>
                  )}
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
