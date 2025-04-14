export const isText = RegExp(/^[a-zA-Z]+$/);
export const isName = RegExp(/^[a-zA-Z ]+$/);
export const isCardNumber = RegExp(/^([+]\d{2})?\d{16}$/);
export const isCvv = RegExp(/^([+]\d{2})?\d{3}$/);
export const isEmail = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
export const isPhone = RegExp(/^([+]\d{2})?(\d{1,4}-?)*\d{1,4}$/);
export const isExpiary = RegExp(/^([+]\d{2})?\d{4}$/);
export const isPassword = RegExp(
  /^.{8,}$/,
);
export const addresLength = RegExp(/^.{2,100}$/);
export const isOtp = RegExp(/^[0-9 ]{4}/i);
export const isWebSite = RegExp(/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9#?&=%_.-]*)?$/);
export const istaxId = RegExp(/^\d{9,14}$/);
// import Strings from '../constants/strings';
export const SigninValidate = {
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: 'Please enter a valid email',
    },
  },
  password: {
    required: true,
    validator: {
      regEx: isPassword,
      // error: 'Password must be of minimum length of 8 characters',
    },
  },
};
export const ForgotEmail = {
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: 'Please enter a valid email',
    },
  },
};
export const register = {
  firstName: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid First Name ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
  lastName: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Last Name ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: 'Invalid email format.',
    },
  },
  password: {
    required: true,
    validator: {
      regEx: isPassword,
      error:
        'Password must contain at least 8 characters',
    },
  },
  confirmPassword: {
    required: true,
    validator: {
      regEx: isPassword,
      // value: true,
      errEmpty: 'Confirm Password is a required field',
      error: 'Password does not match.',
    },
  },
  date: {
    required: true,
    validator: {
      regEx: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
      // value: true,
      errEmpty: 'date is a required field',
      error: 'date does not match.',
    },
  },

};

export const forgotPassword = {
  email: {
    required: true,
    validator: {
      regEx: isEmail,

      error: 'Please enter a valid email',
    },
  },
};

export const resetPassword = {
  newPassword: {
    required: true,
    validator: {
      regEx: isPassword,
      error: 'Password must be requird',
    },
  },
  RepeatNewPassword: {
    required: true,
    validator: {
      regEx: isPassword,
      error: 'Password must be requird',
    },
  },
};


export const editProfile = {
  phoneNumber: {
    required: true,
    validator: {
      regEx: isPhone,
      error: 'Please provide a valid number',
    },
    length: {
      value: 15,
      error: 'Phone number cannot exceed',
    },
  },
  schoolName: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid School Name ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
 
  age: {
    required: true,
    validator: {
      regEx: isPhone,
      error: 'Please provide a valid age',
    },
    length: {
      value: 15,
      error: 'entered text should be between 2-20',
    },
  },
};

export const userInfo={
  firstName: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid name ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
  lastName: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid name ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: 'Invalid email format.',
    },
  },
  phoneNumber: {
    required: true,
    validator: {
      regEx: isPhone,
      error: 'Please provide a valid number',
    },
    length: {
      value: 15,
      error: 'Phone number cannot exceed',
    },
  },
}

export const companyInfo={
  companyName: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Company Name ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
  address1: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Address 1 ',
    },
    length: {
      value: 50,
      error: 'entered text should be between 2-50',
    },
  },
  address2: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Address 2',
    },
    length: {
      value: 50,
      error: 'entered text should be between 2-50',
    },
  },
  address3: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Address 3',
    },
    length: {
      value: 50,
      error: 'entered text should be between 2-50',
    },
  },
  city: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid city ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
  states: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid state ',
    },
    length: {
      value: 20,
      error: 'entered text should be between 2-20',
    },
  },
  zipCode: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid ZipCode',
    },
    length: {
      value: 10,
      error: 'entered text should be between 2-10',
    },
  },
  telephone: {
    required: true,
    validator: {
      regEx: isPhone,
      error: 'Please provide a valid Telephone number',
    },
    length: {
      value: 15,
      error: 'Telephone number cannot exceed 2-15',
    },
  },
  faxNumber: {
    required: true,
    validator: {
      regEx: isPhone,
      error: 'Please provide a valid Fax Number',
    },
    length: {
      value: 15,
      error: 'Fax number cannot exceed 2-15',
    },
  },
  invoiceEmail: {
    required: true,
    validator: {
      regEx: isEmail,
      error: 'Invalid invoice email format.',
    },
  },
  website: {
    required: true,
    validator: {
      regEx: isWebSite,
      error: 'Please provide a valid WebSite',
    },
    length: {
      value: 50,
      error: 'entered text should be between',
    },
  },
  companyNumber: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid CompanyNumber',
    },
    length: {
      value: 10,
      error: 'entered text should be between 2-10',
    },
  },
  ownerDetails: {
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Owner Details',
    },
    length: {
      value: 30,
      error: 'entered text should be between',
    },
  },
  numberPartner: {
    required: true,
    validator: {
      regEx: isPhone,
      error: 'Please provide a valid Number',
    },
    length: {
      value: 15,
      error: 'Fax number cannot exceed 2-15',
    },
  },
  Billing:{
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid billing Details',
    },
    length: {
      value: 30,
      error: 'entered text should be between',
    },
  },
  Importer:{
    required: true,
    validator: {
      regEx: isPhone,
      error: 'Please provide a valid importer Details',
    },
    length: {
      value: 30,
      error: 'entered text should be between',
    },
  },
  Identity:{
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Identity Details',
    },
    length: {
      value: 15,
      error: 'entered text should be between',
    },
  },
  Country:{
    required: true,
    validator: {
      regEx: isText,
      error: 'Please provide a valid Country',
    },
    length: {
      value: 15,
      error: 'entered text should be between',
    },
  }
}





