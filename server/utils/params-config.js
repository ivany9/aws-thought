const { v4: uuidv4 } = require('uuid');
const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-f9fef131-5bea-43f7-836b-d645d3a3c2df',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer
    };
  
    return imageParams;
  };

  module.exports = params;