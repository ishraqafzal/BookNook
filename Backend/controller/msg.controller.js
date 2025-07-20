import Msg from "../model/msg.model.js";
export const createMsg = async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      const newMsg = new Msg({
        name,
        email,
        message
      });
  
      await newMsg.save();
      res.status(201).json({ 
        success: true, 
        data: newMsg,
        message: "Message sent successfully" 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error.message,
        message: "Failed to send message" 
      });
    }
  };