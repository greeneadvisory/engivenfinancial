import Link from "next/link";

const testimonials = [
    {
        name: "Elsa Teresa",
        email: "elsateresa@gmail.com",
        image: "../assets/images/faces/8.jpg",
        rating: 4.3
    },
    {
        name: "Henry Milo",
        email: "henrymilo@gmail.com",
        image: "../assets/images/faces/9.jpg",
        rating: 4.3
    },
    {
        name: "Katherin Oslo",
        email: "katherin12@gmail.com",
        image: "../assets/images/faces/6.jpg",
        rating: 4.3
    },
    {
        name: "Jestin Calm",
        email: "jestin9@gmail.com",
        image: "../assets/images/faces/14.jpg",
        rating: 4.3
    },
    {
        name: "Harin Ford",
        email: "harinford345@gmail.com",
        image: "../assets/images/faces/13.jpg",
        rating: 4.3
    },
    {
        name: "Phillip John",
        email: "phillipjohn21@gmail.com",
        image: "../assets/images/faces/11.jpg",
        quote: "Customer service at this company is outstanding. They were quick to respond to my inquiry and resolved my issue within hours.",
        rating: 4.3
    }
];

export const Landingtestimonials = testimonials.map((testimonial, index) => (
    <div key={index}>
        <div className="box overflow-hidden">
            <div className="box-body">
                <div className="">
                    <span className="text-white"><sup><i
                                className="bi bi-quote text-[2.5rem] me-1 text-white"></i></sup>
                        Customer service at this company is
                        outstanding. They were quick to respond to my inquiry and
                        resolved my issue within hours. --
                        <Link scroll={false} href="#!"
                            className="font-semibold text-[11px] text-white"
                            data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark"
                            data-bs-placement="top"
                            data-bs-title={testimonial.quote}>Read
                            More
                        </Link>
                    </span>
                </div>
                <div className="flex items-center text-end  justify-end">
                    <div className="text-warning block me-1 text-[10px]">
                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                            <i key={i} className="ri-star-fill"></i>
                        ))}
                        {testimonial.rating % 1 !== 0 && <i className="ri-star-half-line"></i>}
                    </div>
                    <span className="text-white">{testimonial.rating}</span>
                </div>
            </div>
            <div className="p-4 bg-white/10">
                <div className="flex items-center">
                    <span className="avatar !rounded-full me-2">
                        <img  src={testimonial.image} alt={testimonial.name}
                            className="img-fluid !rounded-full border-primarytint1color shadow-sm border-2"/>
                    </span>
                    <div>
                        <p className="mb-0 font-semibold text-white">{testimonial.name}</p>
                        <p className="mb-0 text-[11px] font-normal opacity-80 text-white">{testimonial.email}</p>
                    </div>
                    <div className="ms-auto text-xs font-semibold opacity-80 text-end">
                        <div
                            className="ti-btn ti-btn-sm ti-btn-icon !rounded-full bg-white text-fixed-dark custom-landing">
                            <i className="ri-twitter-x-line"></i>
                        </div>
                        <div
                            className="ti-btn ti-btn-sm ti-btn-icon !rounded-full bg-primarytint1color text-white">
                            <i className="ri-share-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
))


//Accordions
export const Landingaccordion = [
    {
        Id: 'faq-collapse-one',
        title: 'Where can I subscribe to your newsletter?',
        Customclass:'active bg-white dark:bg-bodybg  border dark:border-defaultborder/10 mt-[0.5rem] border-defaultborder rounded-sm  dark:border dark:border-defaultborder/10-white/10',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-one",
        Custombodyclass:"",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
      },
    { Id: 'faq-collapse-two', title: " Where can in edit my address?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-two",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-three', title: "What are your opening hours?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div> ,
        Mainid:"faq-three", 
         Custombodyclass:"hidden",
         Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
         <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
    },
    { Id: 'faq-collapse-four', title: "Do I have the right to return an item?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:   <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-four",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-five', title: "  General Terms &amp; Conditions (GTC)",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
        <strong>This is the first item's accordion body.</strong> It
        is shown by
        default, until the collapse plugin adds the appropriate
        classes that we
        use to style each element. These classes control the overall
        appearance,
        as well as the showing and hiding via CSS transitions. You
        can modify
        any of this with custom CSS or overriding our default
        variables. It's
        also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does
        limit overflow.
    </p>,
        Mainid:"faq-five",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-six', title: "  Do I need to create an account to make an order?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-six",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
]
export const Landingaccordion1 = [
    {
        Id: 'faq-collapse-seven',
        title: 'General Terms &amp; Conditions (GTC)',
        Customclass:'active bg-white dark:bg-bodybg border dark:border-defaultborder/10 mt-[0.5rem] border-defaultborder rounded-sm dark:border dark:border-defaultborder/10-white/10',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-seven",
        Custombodyclass:"",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
      },
    { Id: 'faq-collapse-eight', title: "Do I need to create an account to make an order?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-eight",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-nine', title: " Where can I subscribe to your newsletter?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:  <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-nine", 
         Custombodyclass:"hidden",
         Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
         <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
    },
    { Id: 'faq-collapse-ten', title: " Where can in edit my address?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content: <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-ten",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-eleven', title: "What are your opening hours?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:<div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-eleven",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
    { Id: 'faq-collapse-tweleve', title: " Do I have the right to return an item?",
        Customclass:'bg-white dark:bg-bodybg border dark:border-defaultborder/10 border-defaultborder mt-[0.5rem] rounded-sm',
        content:   <div className="p-5">
        <p className="text-defaulttextcolor dark:text-defaulttextcolor/70 ">
            <strong>This is the first item's accordion body.</strong> It
            is shown by
            default, until the collapse plugin adds the appropriate
            classes that we
            use to style each element. These classes control the overall
            appearance,
            as well as the showing and hiding via CSS transitions. You
            can modify
            any of this with custom CSS or overriding our default
            variables. It's
            also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does
            limit overflow.
        </p>
    </div>,
        Mainid:"faq-tweleve",  
        Custombodyclass:"hidden",
        Svgcontent1:<> <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>,
        Svgcontent2:<><path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></>
     },
]
