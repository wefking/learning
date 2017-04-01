const User = require('mongoose').model('User');

exports.create = function(req, res, next) {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(user);
    }
  });
};

exports.list = function(req, res, next) {
/*Model.find(query, fields, options, callback)
  e.g. User.find({}, 'username email', {skip:10,limit:10}, (err,users) => {
*/
  User.find({}, (err,users) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(users);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
  User.findOne({
    _id: id
  }, (err, user) => {
  if (err) {
    return next(err);
  } else {
    req.user = user;
    next();
  }
  });
};

exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, {
    'new': true
    }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(user);
    }
  });
};

exports.delete = function(req, res, next) {
  req.user.remove(err => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(req.user);
    }
  });
};
