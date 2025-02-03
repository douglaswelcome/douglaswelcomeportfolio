export interface Testimonial {
    id: number
    name: string
    jobTitle: string
    company: string
    quote: string
    image: string
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Herman Man",
      jobTitle: "Chief Product Officer",
      company: "Bluevine",
      quote: "Douglas is a fabulous designer. He designs intuitive experiences that align with user needs and business goals. Douglas is an asset to any team.",
      image: "/headshots/herman_man.jpeg?height=100&width=100",
    },
    {
      id: 2,
      name: "Anton Goncharov",
      jobTitle: "CEO",
      company: "Mekanoid",
      quote: "Douglas is unlikely to use words like massive talent when describing himself, but honestly, I can't think of anyone with the same energy, creativity, and authenticity that Douglas brings to any project.",
      image: "/headshots/anton_goncharov.jpeg?height=100&width=100",
    },
    {
      id: 3,
      name: "William Levinson",
      jobTitle: "Product Lead",
      company: "Novo",
      quote: "Douglas is an exceptional product designer whose work consistently exemplifies a deep commitment to customer-centric design. I  wholeheartedly recommend Douglas to any Design team looking to their team to the next level!",
      image: "/headshots/william_levinson.jpeg?height=100&width=100",
    },
    {
      id: 4,
      name: "Heather Gadonniex",
      jobTitle: "CMO",
      company: "GD1 Ventures",
      quote: "For the past 4+ years Douglas has been my design partner. His ability has leveled up the cohesion of our entire brand, product, and employee experience. Douglas brings out the best in others and is a culture bearer. ",
      image: "/headshots/heather_gadonniex.jpeg?height=100&width=100",
    },
  ]
  
  