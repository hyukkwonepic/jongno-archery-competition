import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment-timezone';

import * as S from './styles';

function getOptions() {
  const options = [];
  for (let i = 0; i < 60; i += 1) {
    const round = i + 1;
    const baseTime = moment.tz('2019-09-21 12:00', 'Asia/Seoul');
    const roundStartTime = baseTime.add(
      (12 * Math.floor((round - 1) / 3)).toString(),
      'minutes'
    );

    options.push(
      <option
        key={i}
        value={round}
        // disabled={false}
      >
        {round}대 ({roundStartTime.format('HH:mm')} 개사)
      </option>
    );
  }
  return options;
}

export default function TeamEditForm({ application, onSubmit }) {
  const initialValues = {
    city: '',
    range: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
    substitute: '',
    mobile: '',
    round: ''
  };

  if (application) {
    const {
      round,
      city,
      range,
      player1,
      player2,
      player3,
      player4,
      player5,
      substitute,
      mobile
    } = application;

    initialValues.round = round;
    initialValues.city = city;
    initialValues.range = range;
    initialValues.player1 = player1;
    initialValues.player2 = player2;
    initialValues.player3 = player3;
    initialValues.player4 = player4;
    initialValues.player5 = player5;
    initialValues.substitute = substitute;
    initialValues.mobile = mobile;
  }

  return (
    <S.Form>
      <h2>신청내역 수정하기</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          city: Yup.string().required('시/군/구를 입력해 주세요.'),
          range: Yup.string().required('소속 활터를 입력해 주세요.'),
          player1: Yup.string().required('이름을 입력해 주세요.'),
          player2: Yup.string().required('이름을 입력해 주세요.'),
          player3: Yup.string().required('이름을 입력해 주세요.'),
          player4: Yup.string().required('이름을 입력해 주세요.'),
          player5: Yup.string().required('이름을 입력해 주세요.'),
          substitute: Yup.string().required('이름을 입력해 주세요.'),
          mobile: Yup.string()
            .required('휴대폰 번호를 입력해 주세요.')
            .matches(
              /^([0-9]{3})([0-9]{3,4})([0-9]{4})$/,
              '유효하지 않은 휴대폰 번호 입니다.'
            ),
          round: Yup.string().required('작대를 선택해 주세요.')
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
                <label htmlFor="city">시/군/구</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="span" />
              </div>

              <div>
                <label htmlFor="range">소속정</label>
                <Field type="text" name="range" />
                <ErrorMessage name="range" component="span" />
              </div>

              <div>
                <label htmlFor="player1">선수 1 이름</label>
                <Field id="player1" type="text" name="player1" />
                <ErrorMessage name="player1" component="span" />
              </div>

              <div>
                <label htmlFor="player2">선수 2 이름</label>
                <Field id="player2" type="text" name="player2" />
                <ErrorMessage name="player2" component="span" />
              </div>

              <div>
                <label htmlFor="player3">선수 3 이름</label>
                <Field id="player3" type="text" name="player3" />
                <ErrorMessage name="player3" component="span" />
              </div>

              <div>
                <label htmlFor="player4">선수 4 이름</label>
                <Field id="player4" type="text" name="player4" />
                <ErrorMessage name="player4" component="span" />
              </div>

              <div>
                <label htmlFor="player5">선수 5 이름</label>
                <Field id="player5" type="text" name="player5" />
                <ErrorMessage name="player5" component="span" />
              </div>

              <div>
                <label htmlFor="substitute">예비선수 이름</label>
                <Field id="substitute" type="text" name="substitute" />
                <ErrorMessage name="substitute" component="span" />
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

              <button type="submit" disabled={isSubmitting}>
                수정하기
              </button>
            </Form>
          );
        }}
      </Formik>
    </S.Form>
  );
}
