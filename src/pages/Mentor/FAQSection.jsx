import React from 'react'
import QuestionAnswerBox from '@components/QuestionAnswerBox'
import Button from '@components/Button'
import Arrow from '@/icons/Arrow'
import { faqContentsList } from './data'

const FAQSection = () => {
  let faqMentors = faqContentsList

  return (
    <section id="section-frequently-asked-questions">
      <div className="section-content-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqMentors && faqMentors.map((faq, i) => <QuestionAnswerBox key={i} question={faq.q} answer={faq.a} />)}
        </div>
        <Button className="faq-button" size="lg" primary>
          See FAQ
          <Arrow direction="right" size="m" />
        </Button>
      </div>
    </section>
  )
}

export default FAQSection
