/**
 * Componenta pentru generarea unui bubble de chat.
 * @param {Object} props - Proprietăți pentru personalizarea bubble-ului.
 * @param {string} [props.variant='primary'] - Tipul de bubble de chat (ex: 'primary', 'secondary', 'success', 'warning', 'error', etc.).
 * @param {boolean} [props.end=false] - Indică dacă bubble-ul este la finalul unei conversații.
 * @param {string} [props.text=''] - Textul afișat în interiorul bubble-ului.
 * @returns {JSX.Element} Componenta ChatBubble
 */

type ChatBubbleVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
const ChatBuble = ({variant = 'primary', end=false , text=""}: { variant?: ChatBubbleVariant; end?: boolean; text: string; }): JSX.Element => {
  return (
      <div className={`chat ${!end ? 'chat-start' : 'chat-end'}`}>
        <div className={`chat-bubble chat-bubble-${variant}`}>
          {text}
        </div>
      </div>
      
    
  );
}

export default ChatBuble