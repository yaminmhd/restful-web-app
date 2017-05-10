//application configuration
var express = require('express');
var expressSanitizer = require('express-sanitizer');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

//connecting to mongodb locahost and creating the db
mongoose.connect('mongodb://localhost/webdb');

//create the blog db model. create the schema
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  text: String,
  createdDate:{
    type: Date,
    default: Date.now
  }
});

//compile schema into a model
var Blog = mongoose.model('Blog', blogSchema);

//create a sample data to show
// Blog.create({
//   title: 'This is a title',
//   image: 'https://images.pexels.com/photos/147485/pexels-photo-147485.jpeg?h=350&auto=compress&cs=tinysrgb',
//   text: 'Long unwinded road'
// }, function(err, newContent){
//   if(err){
//     console.log(err);
//   }else{
//     console.log('Newly created data inserted to DB');
//     console.log('=================================');
//     console.log(newContent);
//   }
// });


//index route
app.get('/blogs', function(req,res){
  Blog.find({},function(err,blogs){
    if(err){
      console.log(err);
    }else{
      res.render('index', {blogs:blogs});
    }
  })
});

//new route
app.get('/blogs/new', function(req,res){
  res.render('new');
});

//create route
app.post('/blogs', function(req,res){
  req.body.blog.text = req.sanitize(req.body.blog.text);
  Blog.create(req.body.blog,function(err,createdBlog){
    if(err){
      console.log(err);
    }else{
      res.redirect('/blogs')
      console.log('New post created');
      console.log('createdBlog');
    }
  });
});

//show route
app.get('/blogs/:id', function(req,res){
  Blog.findById(req.params.id, function(err,foundBlog){
    if(err){
      console.log(err);
    }else{
      res.render('show', {blog:foundBlog});
    }
  });
});

//edit route
app.get('/blogs/:id/edit', function(req,res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      console.log(err);
    }else{
      res.render('edit', {blog:foundBlog});
    }
  });
});

//update route
app.put('/blogs/:id', function(req,res){
  console.log(req.body.blog.text);
  req.body.blog.text = req.sanitize(req.body.blog.text)
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
    if(err){
      console.log(err);
    }else{
      res.redirect('/blogs/' + req.params.id);
    }
  });
});

//destroy route
app.delete('/blogs/:id', function(req,res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/blogs');
    }
  });
});

app.listen(8080, function(){
  console.log('Blog Server has started!');
});
