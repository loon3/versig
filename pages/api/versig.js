import Message from 'bitcore-message'

export default (req, res) => {
   
  var address = req.query.addr
  var message = req.query.msg
  var signature = req.query.sig

  var verified = Message(message).verify(address, signature)
  
  if (verified == true){
    verified = 1
  } else {
    verified = 0    
  }
  
  var json_result = {address: address, message: message, signature: signature, verified: verified}    
    
  res.statusCode = 200
  res.json(json_result)
  
}
