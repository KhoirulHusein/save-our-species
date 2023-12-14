/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../../Elements/Button/Buttons';

const DetailArticles = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [comments, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [charCount, setCharCount] = useState(1000);

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Asia/Jakarta',
  };

  const fetchArticlesData = async () => {
    try {
      const response = await axios.get(`http://18.141.159.81/article/${id}`);
      setArticleData(response.data);
    } catch (error) {
      console.error('Error fetching animal data:', error);
    }
  };

  const fetchCommentsData = async () => {
    const response = await axios.get(`http://localhost:9000/comment/articleid?id=${id}`);
    setAllComments(response.data);
    setCommentCount(response.data.length);
  };

  const getTokenUser = async () => {
    try {
      const response = await axios.get('http://localhost:9000/isLogged', { withCredentials: true });
      setUsername(response.data.username);
      return true;
    } catch (err) {
      return false;
    }
  };

  const postComment = async () => {
    if (!comments) {
      alert('Komentar tidak boleh kosong');
      return;
    }
    const postDate = new Date().toLocaleDateString('id-ID', dateOptions);
    // eslint-disable-next-line no-underscore-dangle
    const idArticle = articleData._id;
    const commentData = {
      idArticle,
      username,
      comments,
      postDate,
    };

    const response = await axios.post('http://localhost:9000/article/comment', commentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const newComment = response.data;
    setAllComments([...allComments, newComment]);
    setComment('');
    setCharCount(1000);
    setCommentCount(commentCount + 1);
  };

  const isUserLogged = async () => {
    const result = await getTokenUser();
    if (result) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setComment(inputText);
    const remainingChars = 1000 - inputText.length; // Menghitung karakter yang tersisa
    setCharCount(remainingChars); // Mengupdate state charCount dengan jumlah karakter yang tersisa
  };

  useEffect(() => {
    fetchArticlesData();
    isUserLogged();
    fetchCommentsData();
  }, [id]);

  return (
    <>
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: `url('${articleData && articleData.gambarArticle ? articleData.gambarArticle : 'Loading...'}')` }}>
        <div className="max-w-7xl mx-auto pt-56 md:pt-56 sm:pt-40 xs:pt-28 flex flex-col gap-8 p-6">
          <h1 className="text-left font-bold text-3xl md:text-2xl sm:text-md text-white-A700">{articleData && articleData.judulArticle ? articleData.judulArticle : 'Loading...'}</h1>
          <div className="author-info flex items-center gap-4 text-white-A700">
            <div className="author-picture">
              <img className="rounded-full h-14 w-14 sm:h-10 sm:w-10 flex items-center justify-center" src={articleData && articleData.gambarPenulis ? articleData.gambarPenulis : 'Loading...'} alt="" />
            </div>
            <div className="author-detail flex flex-col sm:text-md sm:text-sm">
              <p className="font-bold">{articleData && articleData.namaPenulis ? articleData.namaPenulis : 'Loading...'}</p>
              <p className="font-light">{articleData && articleData.tanggalArticle ? articleData.tanggalArticle : 'Loading...'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper bg-gray-900 pb-6">
        <div className="article text-lg md:text-md sm:text-sm max-w-7xl mx-auto flex flex-col gap-4 text-left text-white-A700 p-6">
          {articleData && articleData.isiArticle ? (
            articleData.isiArticle.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <p key={index}>{item}</p>
            ))
          ) : (
            'Loading...'
          )}
        </div>
        <div className="allComments max-w-7xl mx-auto text-white-A700 flex flex-col gap-4 sm:text-md xs:text-sm p-6">
          {isLoggedIn ? (
            <div className="container flex flex-col gap-4 rounded-lg bg-gray-800 p-4">
              <label htmlFor="comment" className="font-bold">
                Komentar
                {' ('}
                <span>{commentCount}</span>
                {')'}
              </label>
              <div className="comment-container">
                <textarea id="comment" onChange={handleInputChange} value={comments} maxLength={1000} className="w-full text-gray-700 resize-none rounded-md p-2" placeholder="Tulis komentar di sini..." required />
              </div>
              <div className="wrapper flex justify-between items-center">
                <div className="count">
                  <span>{charCount}</span>
                  {''}
                  {' karakter tersisa'}
                </div>
                <Button
                  variant="fill"
                  size="xs"
                  shape="round"
                  color="green_400"
                  className="px-4"
                  onClick={postComment}
                >
                  Kirim

                </Button>
              </div>
            </div>
          ) : (
            <div className="container max-w-sm mx-auto text-white-A700 mt-4">
              <p>
                Silakan
                {' '}
                <a href="http://localhost:3000/login" className="text-light_green-800 hover:font-bold">login</a>
                {' '}
                untuk meninggalkan komentar.
              </p>
            </div>
          )}
          {allComments
            .map((comment) => (
              // eslint-disable-next-line no-underscore-dangle
              <div className="comments-container rounded-lg bg-gray-800 p-4" key={comment._id}>
                <p className="font-bold sm:text-md xs:text-sm">{comment.username}</p>
                <p className="text-xs font-thin mb-2">{comment.postDate}</p>
                <p className="sm:text-md xs:text-sm">{comment.comments}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DetailArticles;
