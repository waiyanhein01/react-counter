import Box from "./Box";
import Counter from "./Counter";

const App = () => {
  const faqs = [
    {
      "id": 1,
      "question": "What is the return policy?",
      "answer": "Our return policy allows returns within 30 days of purchase with a valid receipt."
    },
    {
      "id": 2,
      "question": "How do I track my order?",
      "answer": "You can track your order by logging into your account on our website or using the tracking number provided in your confirmation email."
    },
    {
      "id": 3,
      "question": "Do you offer international shipping?",
      "answer": "Yes, we offer international shipping to most countries. Shipping rates and times may vary depending on the destination."
    },
    {
      "id": 4,
      "question": "What payment methods do you accept?",
      "answer": "We accept all major credit cards, PayPal, and Apple Pay for online purchases."
    },
    {
      "id": 5,
      "question": "How can I contact customer support?",
      "answer": "You can contact our customer support team via email at support@example.com or by phone at +1-800-123-4567."
    }
  ]
  
  return faqs.map((faq) => <Box key={faq.id} question={faq.question} answer={faq.answer}/> );
};

export default App;
