import { SocialIcon } from "react-social-icons";

export default function AboutUs() {
  return (
    <div>
      <h2>About NC News</h2>
      <p>
        NC News is a comprehensive project developed during the Northcoders
        JavaScript bootcamp, intended to replicate the functionalities of a
        real-world news platform. It features a custom REST API integrated with
        a PostgreSQL database, while the frontend is built using React. The
        platform allows users to explore a variety of articles covering topics
        such as cooking, coding, and football. Articles can be sorted by date,
        votes, or title, and users can search through titles, authors, and
        subjects to locate specific content. Each article also includes
        functionality for comments and voting, enhancing community engagement
        and interaction. This project emphasizes both backend and frontend
        development. It involves designing a robust database schema, building
        and thoroughly testing numerous API endpoints, and ensuring effective
        error handling. Simultaneously, significant attention has been paid to
        creating a clean and user-friendly interface that enhances the overall
        user experience.
      </p>
      <div>
        <h2>More Work by me:</h2>
        <SocialIcon url="https://github.com" />
      </div>
    </div>
  );
}
