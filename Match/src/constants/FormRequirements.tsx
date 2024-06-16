const idRequirements = {
  required: {
    value: true,
    message: '아이디를 입력해주세요.',
  },
};

const passwordRequirements = {
  required: {
    value: true,
    message: '비밀번호를 입력해주세요',
  },
  // pattern: {
  //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   message: '비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함해 입력해주세요!',
  // },
};

const nameRequirements = {
  required: {
    value: true,
    message: '아이디를 입력해주세요!',
  },
};

const ageRequirements = {
  required: {
    value: true,
    message: '나이를 입력해주세요!',
  },
};

const FormRequirements = {
  idRequirements,
  passwordRequirements,
  nameRequirements,
  ageRequirements,
};

export default FormRequirements;
