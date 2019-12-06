import React from 'react';
import Link from 'next/link';

const BlogRadioCardComponent = ({
  title,
  author,
  length,
  hastags,
  description,
  smallThumbnail,
  largeThumbnail,
  id
}) => (
  <Link href={`/radio?id=${id}`}>
    <a>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={smallThumbnail}
              alt="img_desciption"
            />
            <h1>{title}</h1> <h4>{author}</h4>
            <span className="minutes">{length}</span>
            <p className="type">{hastags}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{description}</p>
          </div>
          {/* <div className="movie_social">
        <ul>
          <li>
            <i className="material-icons">share</i>
          </li>
          <li>
            <i className="material-icons"></i>
          </li>
          <li>
            <i className="material-icons">chat_bubble</i>
          </li>
        </ul>
      </div> */}
        </div>

        <div className="blur_back bright_back"></div>

        <style jsx>
          {`
            /* RADIO CARD */
            @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');

            .movie_card {
              position: relative;
              display: block;
              width: 800px;
              height: 350px;
              margin: 20px auto;
              overflow: hidden;
              border-radius: 10px;
              transition: all 0.4s;
              box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
            }
            .movie_card:hover {
              -webkit-transform: scale(1.02);
              transform: scale(1.02);
              box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
              transition: all 0.4s;
            }
            .movie_card .info_section {
              position: relative;
              width: 100%;
              height: 100%;
              background-blend-mode: multiply;
              z-index: 2;
              border-radius: 10px;
            }
            .movie_card .info_section .movie_header {
              position: relative;
              padding: 25px;
              height: 40%;
            }
            .movie_card .info_section .movie_header h1 {
              color: black;
              font-weight: 100;
              font-size: 24px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .movie_card .info_section .movie_header h4 {
              color: #555;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              font-family: 'Montserrat', helvetica, arial, sans-serif;
              font-size: 14px;
            }
            .movie_card .info_section .movie_header .minutes {
              display: inline-block;
              margin-top: 15px;
              color: #555;
              padding: 5px;
              border-radius: 5px;
              border: 1px solid rgba(0, 0, 0, 0.05);
            }
            .movie_card .info_section .movie_header .type {
              display: inline-block;
              color: #959595;
              margin-left: 10px;
            }
            .movie_card .info_section .movie_header .locandina {
              position: relative;
              float: left;
              margin-right: 20px;
              height: 120px;
              box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
            }
            .movie_card .info_section .movie_desc {
              padding: 25px;
              height: 50%;
            }
            .movie_card .info_section .movie_desc .text {
              color: #545454;
            }
            .movie_card .info_section .movie_social {
              height: 10%;
              padding-left: 15px;
              padding-bottom: 20px;
            }
            .movie_card .info_section .movie_social ul {
              list-style: none;
              padding: 0;
            }
            .movie_card .info_section .movie_social ul li {
              display: inline-block;
              color: rgba(0, 0, 0, 0.3);
              transition: color 0.3s;
              transition-delay: 0.15s;
              margin: 0 10px;
            }
            .movie_card .info_section .movie_social ul li:hover {
              transition: color 0.3s;
              color: rgba(0, 0, 0, 0.7);
            }
            .movie_card .info_section .movie_social ul li i {
              font-size: 19px;
              cursor: pointer;
            }
            .movie_card .blur_back {
              position: absolute;
              top: 0;
              z-index: 1;
              height: 100%;
              right: 0;
              background-size: cover;
              border-radius: 11px;
            }

            @media screen and (min-width: 768px) {
              .movie_header {
                width: 65%;
              }

              .movie_desc {
                width: 50%;
              }

              .info_section {
                background: linear-gradient(
                  to right,
                  #e5e6e6 50%,
                  transparent 100%
                );
              }

              .blur_back {
                width: 80%;
                background-position: -100% 10% !important;
              }
            }
            @media screen and (max-width: 768px) {
              .movie_card {
                width: 95%;
                margin: 70px auto;
                min-height: 350px;
                height: auto;
              }

              .blur_back {
                width: 100%;
                background-position: 50% 50% !important;
              }

              .movie_header {
                width: 100%;
                margin-top: 85px;
              }

              .movie_desc {
                width: 100%;
              }

              .info_section {
                background: linear-gradient(
                  to top,
                  #e5e6e6 50%,
                  transparent 100%
                );
                display: inline-grid;
              }
            }
            .bright_back {
              background: url(${largeThumbnail});
            }

            .section {
              padding: 40px 0;
            }
          `}
        </style>
      </div>
    </a>
  </Link>
);

export default BlogRadioCardComponent;