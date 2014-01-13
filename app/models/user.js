var User = function () {
  this.defineProperties({
    username: {type: 'string', required: true, on: ['create', 'update']},
    password: {type: 'string', required: true, on: ['create', 'update']},
    familyName: {type: 'string', required: true},
    givenName: {type: 'string', required: true},
    email: {type: 'string', required: true, on: ['create', 'update']}
  });

  this.validatesLength('username', {min: 3});
  this.validatesLength('password', {min: 8});
  this.validatesConfirmed('password', 'confirmPassword');

  this.hasMany('Passports');
};

User = geddy.model.register('User', User);
