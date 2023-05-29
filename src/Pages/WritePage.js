import React from 'react'
import { Formik, Form } from 'formik'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function WritePage() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values, action) => {
    const token = localStorage.getItem("token");
    const { file, ...v } = values;
    const data = new FormData();
    data.append("data", JSON.stringify(v));
    data.append("file", file);
    
    try {
      const response = await Axios.post("https://minpro-blog.purwadhikabootcamp.com/api/blog", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setValue(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{
        file: null,
        title: "",
        content: "",
        country: "",
        CategoryId: "",
        keywords: "",
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form id="publishBlog" className="publishBlogContainer" onSubmit={props.handleSubmit}>
            <div className="writeABlog">Write A Blog</div>
            <div className="writeInput">
                <div>Title</div>
                <input
                    type="text"
                    name="title"
                    onChange={props.handleChange}
                    value={props.values.title}
                />
            </div>
            <div className="writeInput">
                <div>Country</div>
                <input
                    type="text"
                    name="country"
                    onChange={props.handleChange}
                    value={props.values.country}
                />
            </div>
            <div className="writeInput">
                <div>Keywords</div>
                <input
                    type="text"
                    name="keywords"
                    onChange={props.handleChange}
                    value={props.values.keywords}
                />
            </div>
            <div className="writeCategoryTitle">Blog Category</div>
            <div className="writeCategoryContainer">
                <div className="cat">
                    <input
                        type="radio"
                        name="CategoryId"
                        value="1"
                        id="Bisnis"
                        onChange={props.handleChange}
                    />
                    <label htmlFor="Bisnis">Bisnis</label>
                </div>
                <div className="cat">
                    <input
                        type="radio"
                        name="CategoryId"
                        value="2"
                        id="Ekonomi"
                        onChange={props.handleChange}
                    />
                    <label htmlFor="Ekonomi">Ekonomi</label>
                </div>
                <div className="cat">
                    <input
                        type="radio"
                        name="CategoryId"
                        value="3"
                        id="Teknologi"
                        onChange={props.handleChange}
                    />
                    <label htmlFor="Teknologi">Teknologi</label>
                </div>
                <div className="cat">
                    <input
                        type="radio"
                        name="CategoryId"
                        value="4"
                        id="Olahraga"
                        onChange={props.handleChange}
                    />
                    <label htmlFor="Olahraga">Olahraga</label>
                </div>
                <div className="cat">
                    <input
                        type="radio"
                        name="CategoryId"
                        value="5"
                        id="Kuliner"
                        onChange={props.handleChange}
                    />
                    <label htmlFor="Kuliner">Kuliner</label>
                </div>
                <div className="cat">
                    <input
                        type="radio"
                        name="CategoryId"
                        value="6"
                        id="Internasional"
                        onChange={props.handleChange}
                    />
                    <label htmlFor="Internasional">Internasional</label>
                </div>
                <div className="cat">
                    <input
                        type="radio"
                        name="CategoryId"
                        value="7"
                        id="Fiksi"
                        onChange={props.handleChange}
                    />
                    <label htmlFor="Fiksi">Fiksi</label>
                </div>
            </div>
            <div className="writeContent">
                <div>Text</div>
                <textarea
                    rows="15"
                    cols="70"
                    type="textarea"
                    className="editor"
                    onChange={(event) => {
                    props.setFieldValue("content", event.target.value);}}
                    value={props.values.content}
                />
            </div>
            <div className="writeImage">
                <div className="file" htmlFor="file">Upload Image</div>
                <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => {props.setFieldValue("file", e.currentTarget.files[0]);}}
                />
            </div>
            <button className="writePublish" type="submit">Publish</button>    
        </Form>
      )}
    </Formik>
  );
}

export default WritePage;
