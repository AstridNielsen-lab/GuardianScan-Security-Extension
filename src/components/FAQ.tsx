import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: "How does GuardianScan detect malicious scripts?",
    answer: "GuardianScan uses a combination of signature-based detection, behavioral analysis, and heuristic techniques to identify potentially harmful scripts. It checks scripts against our regularly updated database of known threats, monitors script behavior for suspicious activities, and uses AI-powered analysis to detect zero-day threats."
  },
  {
    question: "Will GuardianScan slow down my browsing?",
    answer: "No, GuardianScan is designed to be lightweight and efficient. It runs in the background with minimal impact on browser performance. In fact, by blocking resource-intensive malicious scripts, it may actually improve your browsing speed in some cases."
  },
  {
    question: "Does GuardianScan collect my browsing data?",
    answer: "No, GuardianScan respects your privacy. It does not collect or transmit your browsing history, form inputs, or any personal information. All threat detection happens locally on your device. The only data sent to our servers are anonymous usage statistics and malware samples (with your permission) to improve our detection capabilities."
  },
  {
    question: "Can GuardianScan block all types of online threats?",
    answer: "While GuardianScan is highly effective at detecting and blocking most online threats, no security solution can guarantee 100% protection. GuardianScan focuses on script-based threats, invasive pop-ups, crypto miners, and phishing attempts. We recommend using it alongside other security measures like anti-virus software for comprehensive protection."
  },
  {
    question: "How often is GuardianScan updated?",
    answer: "GuardianScan receives regular updates to its threat database and detection algorithms. These updates are automatic and happen in the background, ensuring you always have the most current protection against emerging threats."
  },
  {
    question: "Will GuardianScan break website functionality?",
    answer: "GuardianScan is designed to minimize false positives and avoid disrupting legitimate website functionality. If a website doesn't work properly, you can easily disable protection for that specific site or temporarily pause GuardianScan's monitoring."
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about GuardianScan and how it protects your online experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                className="flex w-full justify-between items-center text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900">
                  {item.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  {openItem === index ? (
                    <Minus className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Plus className="h-6 w-6 text-blue-600" />
                  )}
                </span>
              </button>
              {openItem === index && (
                <div className="mt-3 pr-12">
                  <p className="text-base text-gray-600">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;