import { useEffect } from "react"
import styles from "./chatbot.module.css"

const ChatbotUI = () => {
    useEffect(() => {
        // Ensure the script is loaded when the component mounts
        const script = document.createElement('script');
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);
      }, []);
    
    return(
        <>
        <div className="grid grid-rows-3">
        <h1 className="text-2xl py-10">Welcome!</h1>
        <div className={styles.pe}>
            <p>Disini, bot KawanConvo akan menjadi partner belajar percakapan bahasa Inggris!</p>
            <ul>Rules:
                <li>Pastikan tidak ada <b>Typo</b> saat me-reply</li>
                <li>Ketik balasan seperti yang ada didalam tanda kurung (..)</li>
            </ul>        
        </div>
        
        <div className="bg-pink-500">
           <df-messenger
            chat-icon="https://i.pinimg.com/originals/62/aa/1b/62aa1b84788ab8b3cfc55c15f621dfcd.png"
            intent="WELCOME"
            chat-title="KawanConvo"
            agent-id="2ad8fad4-294b-4091-be57-6cd02a5ee7f0"
            language-code="en">
        </df-messenger> 
        </div>
         
        </div>
        
        
        
        </>
    )
}

export default ChatbotUI