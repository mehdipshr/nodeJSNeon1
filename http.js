const http = require ('http');


const server = http.createServer((req,res) => {
  console.log(req.url);
  if(req.url === '/'){
    res.write('home page')
  }else if(req.url === '/products'){
    res.write(JSON.stringify({products:['product1','product2','product3' ]}))
  }else{
    res.write('not found');
  }
  
  res.end();
});
const port =3000;
server.listen(`${port}`);