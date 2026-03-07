
interface SelectType {
  value: string;
  label: string;
}

export const Data: SelectType[] = [
  { value: 'All Categories', label: 'All Categories' },
  { value: 'Software Dveloper', label: 'Software Dveloper' },
  { value: 'Web Developer', label: 'Web Developer' },
  { value: 'Software Architect', label: 'Software Architect' },
  { value: 'IT Hardware', label: 'IT Hardware' },
  { value: 'Network Engineer', label: 'Network Engineer' },
  { value: 'React Developer', label: 'React Developer' },
];
export const Data2: SelectType[] = [
  { value: 'Fresher', label: 'Fresher' },
  { value: '1 Year Exp', label: '1 Year Exp' },
  { value: '2 Year Exp', label: '2 Year Exp' },
  { value: '3 Year Exp', label: '3 Year Exp' },
  { value: '4 Year Exp', label: '4 Year Exp' },
  { value: '5+ Year Exp', label: '5+ Year Exp' },
];

import { Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const LabeledTwoThumbs1 = ({ rtl }: any) => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;

  const [values, setValues] = useState([20, 40]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className="rangeslider-thumb"
              ref={props.ref}
              style={{
                backgroundColor: 'rgba(var(--primary-rgb),1)',
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', 'rgba(var(--primary-rgb),1)', '#ccc'],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <Fragment key={index}>
            <div
              {...props}

              key={index}

              style={{
                ...props.style,
                top: "14px",
                height: '20px',
                width: '24px',
                borderRadius: '4px',
                backgroundColor: 'rgba(var(--primary-rgb),1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'rgba(170, 170, 170, 0.3) 0px 2px 6px'
              }}

            >
              <Fragment key={index}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
                    padding: '4px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(var(--primary-rgb),1)',
                  }}
                >
                  {values[index].toFixed(1)}
                </div>
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: isDragged ? '#548BF4' : '#CCC',
                  }}
                />
              </Fragment>
            </div>
          </Fragment>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs1;

export const Searchcandidate = [
  {
    id: 1,
    name: 'Samantha',
    jobTitle: 'UI/UX Designer',
    location: 'Silicon Valley, CA',
    ratingCount: (245),
    annualPay: '$55,000',
    annualPay1: '$80,000',
    languages: 'English, Spanish',
    image: "../../../assets/images/faces/1.jpg",
    badge: "Bachelor's Degree",
    badge1: " Remote Work",
    badge2: "UI Designer (2+ yrs)",
    badge3: "Full Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating1" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating2" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating3" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating4" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating5" className="text-warning"><i className="m-1 bi bi-star-half"></i></span>,

    ]
  },
  {
    id: 2,
    name: 'Michael',
    jobTitle: 'Frontend Developer',
    location: 'New York City, NY',
    ratingCount: (189),
    annualPay: '$65,000',
    annualPay1: '$90,000',
    languages: 'English, French',
    image: "../../../assets/images/faces/2.jpg",
    badge: "Bachelor's Degree",
    badge1: " Remote Work",
    badge2: "Frontend Developer  (3+ yrs)",
    badge3: "Full Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [
      <span key="rating6" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating7" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating8" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating9" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating10" className="text-warning"><i className="m-1 bi bi-star-half"></i></span>,
    ]
  },
  {
    id: 3,
    name: 'Emily',
    jobTitle: 'Graphic Designer',
    location: 'Los Angeles, CA',
    ratingCount: (201),
    annualPay: '$50,000',
    annualPay1: '$70,000',
    languages: 'English, German',
    image: "../../../assets/images/faces/3.jpg",
    badge: "Bachelor's Degree",
    badge1: " Remote Work",
    badge2: "Graphic Designer  (3+ yrs)",
    badge3: "Full Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating11" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating12" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating13" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating14" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating15" className="text-warning"><i className="m-1 bi bi-star-half"></i></span>,

    ]
  },
  {
    id: 4,
    name: "James",
    jobTitle: "Software Engineer",
    location: "Seattle, WA",
    ratingCount: (172),
    annualPay: "$80,000",
    annualPay1: '$110,000',
    languages: "English, Mandarin",
    image: "../../../assets/images/faces/4.jpg",
    badge: "Bachelor's Degree",
    badge1: "On-site Work",
    badge2: "Software Engineer (5+ yrs)",
    badge3: "Contract",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating16" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating17" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating18" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating19" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating20" className="text-warning"><i className="m-1 bi bi-star-half"></i></span>,

    ]
  },
  {
    id: 5,
    name: "Alexander",
    jobTitle: "Digital Marketing Specialist",
    location: "Toronto, Canada",
    ratingCount: (156),
    annualPay: "$60,000",
    annualPay1: '$85,000',
    languages: "English, French",
    image: "../../../assets/images/faces/5.jpg",
    profileLink: "/apps/jobs/candidate-details",
    badge: "Bachelor's Degree",
    badge1: "On-site Work",
    badge2: "Digital Marketing (3+ yrs)",
    badge3: "Full Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating21" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating22" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating23" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating24" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating25" className="text-warning"><i className="m-1 bi bi-star-half"></i></span>,

    ]
  },
  {
    id: 6,
    name: "Sophia",
    jobTitle: "Data Analyst",
    location: "London, UK",
    ratingCount: (178),
    annualPay: "$70,000",
    annualPay1: '$95,000',
    languages: "English, Spanish",
    image: "../../../assets/images/faces/6.jpg",
    profileLink: "/apps/jobs/candidate-details",
    badge: "Master's Degree",
    badge1: "Remote Work",
    badge2: "Data Analyst (4+ yrs)",
    badge3: "Part Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating26" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating27" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating28" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating29" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating30" className="text-warning"><i className="m-1 bi bi-star"></i></span>,

    ]
  },
  {
    id: 7,
    name: "Marcus",
    jobTitle: "Software Engineer",
    location: "New York City, NY",
    ratingCount: (120),
    annualPay: "$85,000",
    annualPay1: '$110,000',
    languages: "English",
    image: "../../../assets/images/faces/7.jpg",
    badge: "Bachelor's Degree",
    badge1: "On-site Work",
    badge2: "Software Engineer (5+ yrs)",
    badge3: "Full Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating31" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating32" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating33" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating34" className="text-warning"><i className="m-1 bi bi-star"></i></span>,
      <span key="rating35" className="text-warning"><i className="m-1 bi bi-star"></i></span>,

    ]
  },
  {
    id: 8,
    name: "Emily",
    jobTitle: "Graphic Designer",
    location: "Los Angeles, CA",
    ratingCount: (90),
    annualPay: '$70,000',
    annualPay1: '$90,000',
    languages: "English, Spanish",
    image: "../../../assets/images/faces/8.jpg",
    badge: "Bachelor's Degree",
    badge1: "Remote Work",
    badge2: "Graphic Designer (3+ yrs)",
    badge3: "Part Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating36" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating37" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating38" className="text-warning"><i className="m-1 bi bi-star"></i></span>,
      <span key="rating39" className="text-warning"><i className="m-1 bi bi-star"></i></span>,
      <span key="rating40" className="text-warning"><i className="m-1 bi bi-star"></i></span>,

    ]
  },
  {
    id: 9,
    name: "Sophia",
    jobTitle: "Digital Marketer",
    location: "London, UK",
    ratingCount: (180),
    annualPay: "$45,000",
    annualPay1: '$65,000',
    languages: "English, French",
    image: "../../../assets/images/faces/9.jpg",
    badge: "Bachelor's Degree",
    badge1: "Remote Work",
    badge2: "Digital Marketer (4+ yrs)",
    badge3: "Full Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating41" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating42" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating43" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating44" className="text-warning"><i className="m-1 bi bi-star"></i></span>,
      <span key="rating45" className="text-warning"><i className="m-1 bi bi-star"></i></span>,

    ]
  },
  {
    id: 10,
    name: "Lucas",
    jobTitle: "Data Analyst",
    location: "Toronto, Canada",
    ratingCount: (110),
    annualPay: "CAD 65,000",
    annualPay1: 'CAD 85,000',
    languages: "English",
    image: "../../../assets/images/faces/10.jpg",
    badge: "Master's Degree",
    badge1: "On-site Work",
    badge2: "Data Analyst (3+ yrs)",
    badge3: "Part Time",
    avatarColor: 'info',
    avatarColor1: "danger",
    ratings: [

      <span key="rating46" className="text-warning"><i className="m-1 bi bi-star-fill"></i></span>,
      <span key="rating47" className="text-warning"><i className="m-1 bi bi-star"></i></span>,
      <span key="rating48" className="text-warning"><i className="m-1 bi bi-star"></i></span>,
      <span key="rating49" className="text-warning"><i className="m-1 bi bi-star"></i></span>,
      <span key="rating50" className="text-warning"><i className="m-1 bi bi-star"></i></span>,

    ]
  },
];
