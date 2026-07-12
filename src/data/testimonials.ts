export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  verified: boolean;
  review: string;
  tags: string[];
  timeAgo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al Mansoori",
    location: "Dubai, UAE",
    rating: 5.0,
    verified: true,
    review:
      "After years of severe knee pain, Dr. Dhaval performed my knee replacement surgery with exceptional precision. The recovery was smoother than expected, and I can now walk comfortably again.",
    tags: ["Knee Replacement", "Joint Replacement"],
    timeAgo: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    location: "Sharjah, UAE",
    rating: 4.5,
    verified: true,
    review:
      "My shoulder arthroscopy procedure was explained thoroughly, and every concern was addressed patiently. I regained mobility much faster than I anticipated.",
    tags: ["Shoulder Arthroscopy", "Sports Injury"],
    timeAgo: "1 month ago",
  },
  {
    name: "Mohammed Al Zaabi",
    location: "Abu Dhabi, UAE",
    rating: 5.0,
    verified: false,
    review:
      "Dr. Dhaval's expertise in sports medicine helped me return to football after a complex ligament injury. His guidance throughout rehabilitation was invaluable.",
    tags: ["Sports Medicine", "Arthroscopy"],
    timeAgo: "6 weeks ago",
  },
  {
    name: "Rajesh Patel",
    location: "Ahmedabad, India",
    rating: 4.0,
    verified: true,
    review:
      "I consulted Dr. Dhaval for persistent elbow pain. His diagnosis was accurate, and the treatment plan helped me resume daily activities without discomfort.",
    tags: ["Elbow Surgery", "Joint Care"],
    timeAgo: "2 months ago",
  },
  {
    name: "Fatima Al Nuaimi",
    location: "Dubai, UAE",
    rating: 5.0,
    verified: true,
    review:
      "The entire journey, from consultation to post-operative care, was exceptional. My hip replacement surgery was successful, and I am now pain-free.",
    tags: ["Hip Replacement", "Joint Replacement"],
    timeAgo: "3 months ago",
  },
  {
    name: "Vikram Desai",
    location: "Rajkot, India",
    rating: 4.5,
    verified: true,
    review:
      "Dr. Dhaval carefully explained every treatment option before my knee arthroscopy. His attention to detail and patient-focused approach were reassuring.",
    tags: ["Knee Arthroscopy", "Sports Medicine"],
    timeAgo: "4 months ago",
  },
  {
    name: "Anjali Verma",
    location: "Bhopal, India",
    rating: 5.0,
    verified: false,
    review:
      "My shoulder surgery was performed flawlessly. The rehabilitation plan was easy to follow, and I experienced a significant improvement in mobility.",
    tags: ["Shoulder Surgery", "Arthroscopy"],
    timeAgo: "5 months ago",
  },
  {
    name: "Omar Al Hammadi",
    location: "Ajman, UAE",
    rating: 4.5,
    verified: true,
    review:
      "I was impressed by Dr. Dhaval's professionalism and compassionate care. My sports-related knee injury was treated effectively, allowing me to return to training.",
    tags: ["Sports Injury", "Knee Arthroscopy"],
    timeAgo: "2 months ago",
  },
  {
    name: "Sneha Nair",
    location: "Dubai, UAE",
    rating: 5.0,
    verified: true,
    review:
      "Dr. Dhaval made me feel confident throughout my wrist surgery. The procedure was minimally invasive, and recovery was quicker than expected.",
    tags: ["Wrist Surgery", "Arthroscopy"],
    timeAgo: "3 weeks ago",
  },
  {
    name: "Khalid Al Mazrouei",
    location: "Al Ain, UAE",
    rating: 4.0,
    verified: false,
    review:
      "Excellent care and thorough follow-up support. My elbow injury has healed well, and I have regained full range of motion.",
    tags: ["Elbow Surgery", "Sports Medicine"],
    timeAgo: "6 months ago",
  },
  {
    name: "Nisha Mehta",
    location: "Ahmedabad, India",
    rating: 5.0,
    verified: true,
    review:
      "The knee replacement procedure exceeded my expectations. Dr. Dhaval's expertise and reassuring communication made the entire experience comfortable.",
    tags: ["Knee Replacement", "Joint Care"],
    timeAgo: "7 months ago",
  },
  {
    name: "Saeed Al Marri",
    location: "Dubai, UAE",
    rating: 4.5,
    verified: true,
    review:
      "I underwent hip preservation treatment under Dr. Dhaval's care. His detailed explanations and precise diagnosis made all the difference.",
    tags: ["Hip Surgery", "Joint Preservation"],
    timeAgo: "5 weeks ago",
  },
  {
    name: "Meera Shah",
    location: "Rajkot, India",
    rating: 5.0,
    verified: true,
    review:
      "From the first consultation to the final review, the level of care was outstanding. My shoulder pain has completely resolved.",
    tags: ["Shoulder Arthroscopy", "Joint Care"],
    timeAgo: "8 months ago",
  },
  {
    name: "Abdullah Al Falasi",
    location: "Sharjah, UAE",
    rating: 4.5,
    verified: false,
    review:
      "Dr. Dhaval's minimally invasive approach helped me recover quickly after knee surgery. I highly recommend him for sports injuries.",
    tags: ["Knee Arthroscopy", "Sports Injury"],
    timeAgo: "4 weeks ago",
  },
  {
    name: "Pooja Trivedi",
    location: "Ahmedabad, India",
    rating: 4.0,
    verified: true,
    review:
      "I appreciated the time Dr. Dhaval spent answering my questions. The treatment plan was effective, and my recovery progressed smoothly.",
    tags: ["Wrist Surgery", "Arthroscopy"],
    timeAgo: "9 months ago",
  },
  {
    name: "Yousef Al Ketbi",
    location: "Dubai, UAE",
    rating: 5.0,
    verified: true,
    review:
      "After a football injury, I underwent ligament reconstruction surgery. Thanks to Dr. Dhaval's expertise, I returned to sports with confidence.",
    tags: ["Sports Medicine", "Arthroscopy"],
    timeAgo: "1 month ago",
  },
  {
    name: "Rohit Singh",
    location: "Bhopal, India",
    rating: 4.5,
    verified: false,
    review:
      "The consultation was detailed and informative. Dr. Dhaval's treatment significantly improved my chronic hip pain.",
    tags: ["Hip Surgery", "Joint Preservation"],
    timeAgo: "10 months ago",
  },
  {
    name: "Aisha Al Suwaidi",
    location: "Abu Dhabi, UAE",
    rating: 5.0,
    verified: true,
    review:
      "My recovery after shoulder arthroscopy was remarkably fast. Dr. Dhaval and his team provided exceptional support throughout.",
    tags: ["Shoulder Arthroscopy", "Sports Medicine"],
    timeAgo: "2 months ago",
  },
  {
    name: "Harsh Vyas",
    location: "Rajkot, India",
    rating: 4.5,
    verified: true,
    review:
      "I travelled for treatment based on recommendations from friends. The care I received for my knee condition was excellent.",
    tags: ["Knee Replacement", "Arthroscopy"],
    timeAgo: "11 months ago",
  },
  {
    name: "Noor Al Shehhi",
    location: "Dubai, UAE",
    rating: 5.0,
    verified: true,
    review:
      "Dr. Dhaval's expertise in orthopaedic surgery is truly commendable. My hip replacement restored my mobility and quality of life.",
    tags: ["Hip Replacement", "Joint Replacement"],
    timeAgo: "3 months ago",
  },
  {
    name: "Kavita Joshi",
    location: "Ahmedabad, India",
    rating: 4.0,
    verified: false,
    review:
      "The diagnosis was precise, and the rehabilitation plan was practical and effective. I felt supported throughout the treatment process.",
    tags: ["Sports Injury", "Joint Care"],
    timeAgo: "1 year ago",
  },
  {
    name: "Salem Al Dhaheri",
    location: "Al Ain, UAE",
    rating: 4.5,
    verified: true,
    review:
      "I consulted Dr. Dhaval for chronic elbow pain caused by sports activity. The treatment outcome was excellent, and I have regained strength.",
    tags: ["Elbow Surgery", "Sports Medicine"],
    timeAgo: "7 months ago",
  },
  {
    name: "Ritu Malhotra",
    location: "Dubai, UAE",
    rating: 5.0,
    verified: true,
    review:
      "The level of professionalism and attention to detail was outstanding. My knee replacement surgery was a complete success.",
    tags: ["Knee Replacement", "Joint Replacement"],
    timeAgo: "5 months ago",
  },
  {
    name: "Hassan Al Neyadi",
    location: "Ajman, UAE",
    rating: 4.5,
    verified: false,
    review:
      "Dr. Dhaval clearly explained my condition and recommended the best treatment approach. The entire experience was reassuring and positive.",
    tags: ["Arthroscopy", "Sports Injury"],
    timeAgo: "8 weeks ago",
  },

  {
    name: "Divya Iyer",
    location: "Sharjah, UAE",
    rating: 5.0,
    verified: true,
    review:
      "I underwent limb lengthening treatment under Dr. Dhaval's care. His expertise, regular follow-ups, and compassionate approach made the journey much easier.",
    tags: ["Limb Lengthening", "Orthopaedic Surgery"],
    timeAgo: "1 year ago",
  },
];