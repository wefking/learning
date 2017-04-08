const User = require('mongoose').model('User');
const passport = require('passport');


/**
 * Private method that returns a unified error message from a Mongoose
 * error object.
 * There are two possible errors here:
 * - MongoDB indexing error handled using error code
 * - Mongoose calidation error handled using the err.errors
 * @param {Mongoose object} err 
 * @return {String message
 */
function getErrorMessage(err) {
  let message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already existis';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }
  return message;
};

/**
 * Render sign-in page
 */
exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('signin', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
};

/**
 * Render sign-up page
 */
exports.renderSignup = function(req, res, next) {
  if (!req.user) {
    res.render('signup', {
      title: 'Sign-up Form',
      messages: req.flash('error')
    });
  } else {
    return res.redirect('/');
  }
};

/**
 * Uses the User model to create new users
 * Creates a user object from the HTTP request body
 * Try saving the user object to MongoDB
 * If error occurs then the appropiate message will be provided to user
 * If user creation was succesful, the user session will be created
 * using the req.login() method. (establish a succesful login session)
 * Provided by Passport
 * After the login operation is completed, a user object will be signed
 * to the req.user object
 */
exports.signup = function(req, res, next) {
  if (!req.user) {
    const user = new User(req.body);
    user.provider = 'local';

    user.save((err) => {
      if (err) {
        const message = getErrorMessage(err);

        req.flash('error', message);
        return res.redirect('/signup');
      }
      req.login(user, (err) => {
        if (err) return next(err);
        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  }
};

/**
 * Invalidate the authentication session
 * It uses the req.logout() method provided by Passport.
 */
exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
};

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
