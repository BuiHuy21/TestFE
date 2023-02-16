import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addPost, deletePost, editPost, getAllPost } from "../services/Post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);

  const notify = (noti) => toast(`${noti}`);
  const navigate = useNavigate();

  const getPost = async (page) => {
    const res = await getAllPost(page);
    setTotalPost(res.total);
    setTotalPage(res.total_page);
    if (res && res.posts) setPosts(res.posts);
  };

  useEffect(() => {
    getPost(1);
  }, []);

  const handlePageClick = (event) => {
    getPost(+event.selected + 1);
  };

  const handleAddPost = async () => {
    if (!title || !desc || !tags) {
      alert("Vui long nhap du cac truong");
    } else {
      console.log(tags);
      await addPost(title, desc, tags);
      notify("Đã thêm post thành công");
      getPost(0);
      setTitle("");
      setDesc("");
      setTags("");
    }
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    notify("Xóa thành công");
    getPost(0);
  };

  // const handleEdit = (item) => {

  // };
  // const handleUpdatePost = async () => {

  // };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
    notify("Logouted");
  };
  return (
    <>
      <div className="profile">
        <div className="profile__left">
          <Link to="/">
            <img src="/logo.png" alt="logo_profile" />
          </Link>
          <ul className="profile__list">
            <li className="profile__link">
              <NavLink href="/profile">Posts</NavLink>
            </li>
            <li className="profile__link">
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile__right">
          <div className="profile__top">
            <div className=" btn" onClick={handleAddPost}>
              Add New
            </div>

            <div className="profile__top-wrap">
              <input
                type="text"
                placeholder="Title"
                className="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                className="title"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <select
                className="tag"
                onChange={(e) => setTags(e.target.value)}
                // onChange={(e) => console.log(e.target.value)}
              >
                <option value="reactjs">ReactJs</option>
                <option value="angular">Angular</option>
                <option value="vuejs">VueJS</option>
                <option value="java">Java</option>
              </select>
            </div>
          </div>
          <div className="profile__content">
            <table id="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Tags</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts &&
                  posts.length > 0 &&
                  posts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.tags}</td>
                        <td>
                          <button className="edit">Edit</button>
                          <button
                            className="edit"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={totalPage}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
          />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Profile;
