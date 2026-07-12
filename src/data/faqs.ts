export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "General Orthopaedics",
    faqs: [
      {
        question: "When should I consult an orthopaedic specialist?",
        answer:
          "Persistent pain, swelling, stiffness, instability, limited movement, sports injuries, fractures, or difficulty performing everyday activities are good reasons to seek an orthopaedic evaluation.",
      },
      {
        question: "Will I always need surgery?",
        answer:
          "No. Many orthopaedic conditions improve with medications, physiotherapy, injections, activity modification, and rehabilitation. Surgery is recommended only when conservative treatment is no longer effective.",
      },
      {
        question: "What imaging tests may be required?",
        answer:
          "Depending on your condition, your doctor may recommend X-rays, MRI, CT scans, ultrasound, or blood investigations to make an accurate diagnosis.",
      },
      {
        question: "How should I prepare for my first consultation?",
        answer:
          "Bring previous medical records, X-rays, MRI scans, prescriptions, reports, and a list of current medications to help with evaluation.",
      },
      {
        question: "How important is physiotherapy after treatment?",
        answer:
          "Physiotherapy plays a vital role in restoring movement, rebuilding strength, improving flexibility, and achieving long-term recovery after both surgical and non-surgical treatments.",
      },
      {
        question: "Can I continue exercising after treatment?",
        answer:
          "Yes. Most patients return to regular exercise with proper rehabilitation and guidance from their orthopaedic surgeon and physiotherapist.",
      },
      {
        question: "How long does recovery usually take?",
        answer:
          "Recovery depends on the condition and treatment. Minor injuries may recover within weeks, while complex surgeries can require several months of rehabilitation.",
      },
      {
        question: "Does age determine treatment options?",
        answer:
          "No. Treatment decisions are based on symptoms, joint damage, activity level, and overall health rather than age alone.",
      },
      {
        question: "Do you treat sports injuries in non-athletes?",
        answer:
          "Yes. Sports medicine principles are equally effective for work-related injuries, active individuals, and anyone with ligament, tendon, or joint injuries.",
      },
      {
        question: "Can international patients receive treatment?",
        answer:
          "Yes. Dr. Dhaval H. Sagala welcomes international patients and provides comprehensive consultation, surgical care, and rehabilitation planning.",
      },
    ],
  },

  {
    id: "joint-replacement",
    title: "Joint Replacement",
    faqs: [
      {
        question: "When is joint replacement recommended?",
        answer:
          "Joint replacement is recommended when severe arthritis or joint damage causes persistent pain, stiffness, and reduced mobility despite non-surgical treatment.",
      },
      {
        question: "Which joints can be replaced?",
        answer:
          "Common joint replacements include the knee, hip, shoulder, and elbow, depending on the severity of joint damage.",
      },
      {
        question: "How long do modern joint implants last?",
        answer:
          "With proper care and activity modification, modern implants commonly last 15–25 years or even longer.",
      },
      {
        question: "Will I be able to walk after surgery?",
        answer:
          "Most patients begin standing and walking with assistance within 24 hours following surgery.",
      },
      {
        question: "Is joint replacement painful?",
        answer:
          "Modern anaesthesia, minimally invasive techniques, and effective pain management significantly reduce discomfort during recovery.",
      },
      {
        question: "How long is rehabilitation?",
        answer:
          "Most patients complete structured rehabilitation over 3–6 months, depending on the joint and overall health.",
      },
      {
        question: "Can both joints be replaced together?",
        answer:
          "In selected patients, bilateral joint replacement may be considered after detailed evaluation.",
      },
      {
        question: "Can I return to an active lifestyle?",
        answer:
          "Yes. Most patients return to walking, cycling, swimming, golf, and other low-impact activities after rehabilitation.",
      },
    ],
  },

    {
    id: "sports-medicine",
    title: "Sports Medicine",
    faqs: [
      {
        question: "What is Sports Medicine?",
        answer:
          "Sports medicine focuses on preventing, diagnosing, treating, and rehabilitating injuries related to sports, exercise, and physical activity.",
      },
      {
        question: "Do all sports injuries require surgery?",
        answer:
          "No. Most sports injuries respond well to physiotherapy, rehabilitation, and non-operative treatment.",
      },
      {
        question: "What are the most common sports injuries?",
        answer:
          "ACL injuries, meniscus tears, rotator cuff injuries, ankle sprains, tennis elbow, muscle strains, and shoulder instability.",
      },
      {
        question: "Can recreational athletes benefit?",
        answer:
          "Absolutely. Sports medicine is suitable for everyone—not only professional athletes.",
      },
      {
        question: "How soon can I return to sports?",
        answer:
          "Return depends on the injury and recovery progress, usually ranging from several weeks to several months.",
      },
      {
        question: "What is injury prevention training?",
        answer:
          "It focuses on improving flexibility, balance, strength, movement patterns, and technique to reduce injury risk.",
      },
      {
        question: "Is rehabilitation necessary after surgery?",
        answer:
          "Yes. Rehabilitation is essential for restoring strength, coordination, and performance.",
      },
      {
        question: "Can old sports injuries still be treated?",
        answer:
          "Yes. Even chronic or neglected sports injuries can often be successfully managed.",
      },
    ],
  },

  {
    id: "limb-lengthening",
    title: "Limb Lengthening & Reconstruction",
    faqs: [
      {
        question: "What is limb lengthening surgery?",
        answer:
          "A specialized procedure that gradually increases bone length while encouraging natural bone regeneration.",
      },
      {
        question: "Who may benefit from limb lengthening?",
        answer:
          "Patients with congenital deformities, growth disturbances, trauma, infections, or leg length discrepancies.",
      },
      {
        question: "Is the bone actually regenerated?",
        answer:
          "Yes. New bone naturally forms between the separated bone segments during the lengthening process.",
      },
      {
        question: "How much length can be achieved?",
        answer:
          "The achievable length varies depending on age, bone quality, and treatment goals.",
      },
      {
        question: "How long does treatment take?",
        answer:
          "Treatment may take several months, including both distraction and bone consolidation phases.",
      },
      {
        question: "Will physiotherapy be required?",
        answer:
          "Yes. Rehabilitation is critical throughout the entire treatment process.",
      },
      {
        question: "Is limb reconstruction only for children?",
        answer:
          "No. Adults can also benefit from limb reconstruction depending on the condition.",
      },
      {
        question: "Can deformities also be corrected?",
        answer:
          "Yes. Limb reconstruction often addresses deformities and alignment problems alongside length differences.",
      },
    ],
  },

    {
    id: "hip-care",
    title: "Hip Care",
    faqs: [
      {
        question: "What causes hip pain?",
        answer:
          "Common causes include arthritis, hip impingement, fractures, tendon injuries, bursitis, and sports injuries.",
      },
      {
        question: "What is hip arthroscopy?",
        answer:
          "A minimally invasive procedure used to diagnose and treat hip conditions through small incisions.",
      },
      {
        question: "When is hip replacement necessary?",
        answer:
          "When severe arthritis causes persistent pain, stiffness, and limited mobility despite conservative treatment.",
      },
      {
        question: "Can hip pain occur in younger adults?",
        answer:
          "Yes. Sports injuries, impingement, and labral tears frequently affect younger individuals.",
      },
      {
        question: "How long is recovery after hip surgery?",
        answer:
          "Recovery varies but generally ranges from several weeks to a few months.",
      },
      {
        question: "Can hip arthritis be treated without surgery?",
        answer:
          "Yes. Physiotherapy, medications, injections, and lifestyle modifications often help.",
      },
      {
        question: "Will I walk normally again?",
        answer:
          "Most patients regain comfortable walking following appropriate treatment and rehabilitation.",
      },
      {
        question: "Can I return to exercise?",
        answer:
          "Yes. Low-impact activities are usually encouraged after recovery.",
      },
    ],
  },

  {
    id: "knee-care",
    title: "Knee Care",
    faqs: [
      {
        question: "What causes knee pain?",
        answer:
          "Arthritis, ligament injuries, meniscus tears, cartilage damage, tendon injuries, fractures, and sports trauma.",
      },
      {
        question: "What is an ACL injury?",
        answer:
          "An ACL injury is a tear of one of the knee's major stabilizing ligaments, commonly occurring during sports.",
      },
      {
        question: "Does every ACL tear need surgery?",
        answer:
          "No. Treatment depends on age, activity level, instability, and patient goals.",
      },
      {
        question: "What is a meniscus tear?",
        answer:
          "A tear of the cartilage that cushions the knee joint.",
      },
      {
        question: "What is knee arthroscopy?",
        answer:
          "A minimally invasive surgery used to diagnose and repair knee problems.",
      },
      {
        question: "When is knee replacement recommended?",
        answer:
          "When arthritis severely affects walking, daily activities, and quality of life.",
      },
      {
        question: "Can arthritis be managed without surgery?",
        answer:
          "Yes. Early arthritis often responds to medications, injections, weight management, and physiotherapy.",
      },
      {
        question: "How soon can I walk after knee surgery?",
        answer:
          "Most patients begin walking with assistance within 24 hours.",
      },
      {
        question: "Can I kneel after knee replacement?",
        answer:
          "Many patients can kneel comfortably over time, although some may continue to experience mild discomfort.",
      },
      {
        question: "Will I return to sports?",
        answer:
          "Most patients safely return to walking, cycling, swimming, and other low-impact sports.",
      },
    ],
  },

    {
    id: "shoulder-care",
    title: "Shoulder Care",
    faqs: [
      {
        question: "What causes shoulder pain?",
        answer:
          "Rotator cuff tears, arthritis, frozen shoulder, tendonitis, bursitis, instability, and fractures.",
      },
      {
        question: "What is frozen shoulder?",
        answer:
          "A condition causing stiffness, pain, and restricted shoulder movement.",
      },
      {
        question: "What is shoulder arthroscopy?",
        answer:
          "A minimally invasive procedure used to treat various shoulder conditions.",
      },
      {
        question: "What is a rotator cuff tear?",
        answer:
          "A tear of one or more tendons responsible for shoulder movement and stability.",
      },
      {
        question: "Can shoulder instability be corrected?",
        answer:
          "Yes. Both rehabilitation and surgery can successfully restore stability.",
      },
      {
        question: "When is shoulder replacement needed?",
        answer:
          "For severe arthritis or irreparable joint damage causing chronic pain.",
      },
      {
        question: "How long is sling use after surgery?",
        answer:
          "Usually between 2–6 weeks depending on the procedure.",
      },
      {
        question: "When can I drive again?",
        answer:
          "Typically after 4–6 weeks, depending on recovery.",
      },
      {
        question: "Can athletes return to sports?",
        answer:
          "Yes, following structured rehabilitation.",
      },
      {
        question: "Can shoulder problems recur?",
        answer:
          "Proper rehabilitation greatly reduces recurrence risk.",
      },
    ],
  },

  {
    id: "elbow-care",
    title: "Elbow Care",
    faqs: [
      {
        question: "What causes elbow pain?",
        answer:
          "Overuse injuries, tendonitis, arthritis, fractures, nerve compression, and sports injuries.",
      },
      {
        question: "What is tennis elbow?",
        answer:
          "An overuse injury affecting the tendons on the outside of the elbow.",
      },
      {
        question: "What is golfer's elbow?",
        answer:
          "A tendon injury affecting the inner side of the elbow.",
      },
      {
        question: "What is cubital tunnel syndrome?",
        answer:
          "Compression of the ulnar nerve causing numbness and weakness in the hand.",
      },
      {
        question: "Is elbow arthroscopy minimally invasive?",
        answer:
          "Yes. It uses small incisions to diagnose and treat elbow conditions.",
      },
      {
        question: "Can tendon injuries heal without surgery?",
        answer:
          "Many mild injuries respond well to physiotherapy and conservative care.",
      },
      {
        question: "When is elbow replacement recommended?",
        answer:
          "For advanced arthritis or severe joint destruction.",
      },
      {
        question: "How long is elbow rehabilitation?",
        answer:
          "Recovery varies but often takes several weeks to months.",
      },
    ],
  },

    {
    id: "wrist-hand-care",
    title: "Wrist & Hand Care",
    faqs: [
      {
        question: "What causes wrist pain?",
        answer:
          "Fractures, tendon injuries, arthritis, ligament tears, nerve compression, and repetitive strain are among the most common causes of wrist pain.",
      },
      {
        question: "What is carpal tunnel syndrome?",
        answer:
          "Carpal tunnel syndrome is caused by compression of the median nerve at the wrist, resulting in numbness, tingling, weakness, and hand discomfort.",
      },
      {
        question: "What is trigger finger?",
        answer:
          "Trigger finger is a condition in which a finger catches, locks, or clicks during movement due to inflammation of the tendon sheath.",
      },
      {
        question: "What is wrist arthroscopy?",
        answer:
          "Wrist arthroscopy is a minimally invasive procedure that uses a small camera and specialized instruments to diagnose and treat wrist disorders through tiny incisions.",
      },
      {
        question: "Can ganglion cysts disappear without surgery?",
        answer:
          "Yes. Some ganglion cysts resolve naturally, while others may require aspiration or surgical removal if they become painful or interfere with daily activities.",
      },
      {
        question: "When is hand surgery necessary?",
        answer:
          "Hand surgery may be recommended when conservative treatment fails or when fractures, tendon injuries, nerve compression, or other conditions require surgical repair.",
      },
      {
        question: "How long does wrist recovery take?",
        answer:
          "Recovery depends on the specific condition and treatment. Minor procedures may recover within weeks, while more complex surgeries require a longer rehabilitation period.",
      },
      {
        question: "Can I regain full hand function?",
        answer:
          "Most patients regain excellent hand and wrist function with appropriate treatment, structured rehabilitation, and adherence to postoperative guidance.",
      },
    ],
  },
];