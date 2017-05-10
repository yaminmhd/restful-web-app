# restful-web-app
This is a blog web app that demonstartes the CRUD operation using node.js, express and mongoose


<h1>RESTFUL routes for blog app</h1>

<table width="100%" border="1">
  <tr>
    <th>Name</th>
    <th>URL</th>
    <th>HTTP verb</th>
    <th>Description</th>
    <th>Mongoose</th>
  </tr>
  <tr>
    <td>INDEX</td>
    <td>/blog</td>
    <td>GET</td>
    <td>list all blogs</td>
    <td>Blog.find()</td>
  </tr>
  <tr>
    <td>NEW</td>
    <td>/blog/new</td>
    <td>GET</td>
    <td>show new blog form</td>
    <td>-</td>
  </tr>
  <tr>
    <td>CREATE</td>
    <td>/blog/</td>
    <td>POST</td>
    <td>create a new blog and redirect somewhere</td>
    <td>Blog.create()</td>
  </tr>
  <tr>
    <td>SHOW</td>
    <td>/blog/:id</td>
    <td>GET</td>
    <td>show info on a particular blog</td>
    <td>Blog.findById()</td>
  </tr>
  <tr>
    <td>EDIT</td>
    <td>/blog/:id/edit</td>
    <td>GET</td>
    <td>show edit form of a particular blog</td>
    <td>Blog.findById()</td>
  </tr>
  <tr>
    <td>UPDATE</td>
    <td>/blog/:id</td>
    <td>PUT</td>
    <td>update a particular blog and redirect somewhere</td>
    <td>Blog.findByIdAndUpdate()</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/blog/:id</td>
    <td>DELETE</td>
    <td>delete a particular blog and redirect somewhere</td>
    <td>Blog.findByIdAndRemove()</td>
  </tr>
</table>
