var express = require('express');
var router = express.Router();

var data = [
    {username:"paco",password:"123"},
    {username:"ganzito", password:"222"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',function(req,res){
  res.render('login', {title: 'Login con Bootstrap :v'});
});
router.post('/login',function (req,res) {
    if (req.body.username && req.body.password){
      var username = req.body.username;
      var password = req.body.password;
      for (let i=0; i<=data.length; i++){
          console.log(data[i].username);
        if(username === data[i].username){
          if(password === data[i].password){
            console.log("login exitoso!");
              res.render('welcome',{user:username})
          }else{
            console.error("contraseña erronea");
            res.redirect('/login');
          }
        }else{
          console.error("el usuario no existe");
        }
      }
    } else{
      res.redirect('/login')
    }
});
module.exports = router;
