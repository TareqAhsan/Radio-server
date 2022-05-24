const Radio = require("../model/radioModel");

const addRadio = async (req, res, next) => {
  const { name, chanelno } = req.body;
  let radio;
  try {
    radio = new Radio({
      name,
      chanelno,
    });
    const  res = await radio.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  if (!radio) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ radio });
};

const getAll = async(req,res)=>{
  let radios;
  try{
    radios = await Radio.find()
    console.log(radios)
  }catch(err){
    console.log(err);
  }
  if (!radios) {
    res.status(404).json({message:'No station found'})
  }
  res.status(200).json({radios})
}

const deleteRadio= async(req,res)=>{
  const id = req.params.id
  let radio
  console.log(id, typeof id)
  try{
    radio = await Radio.findByIdAndRemove(id)
    // console.log(radio);
  }catch(err){
    console.log(err)
  }  if (!radio) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: " Successfully Deleted" });
};

const updateRadio = async(req,res)=>{
  const id = req.params.id;
  const { name, chanelno } = req.body;
  let radio;
  try{
    radio = await Radio.findByIdAndUpdate(id,{name,chanelno})
    radio = await radio.save()
    // console.log('update', radio)
  }catch(err){
    console.log(err);
  }
  if (!radio) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ radio });
}


module.exports = { addRadio,getAll,deleteRadio,updateRadio };
