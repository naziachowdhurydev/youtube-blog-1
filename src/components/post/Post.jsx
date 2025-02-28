import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://media.istockphoto.com/id/697120006/photo/amazing-cloudscape-on-the-sky.jpg?s=612x612&w=0&k=20&c=6GK5lZu6xbOpVBNw4tnyoMiu_O8JrD6Et1-TM2b6dqg="
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore
        sequi aliquam, quasi, voluptatum deserunt eveniet neque dolores ipsam
        quas maxime? Ex doloribus et commodi molestias reiciendis deleniti
        nostrum. Nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Natus inventore sequi aliquam, quasi, voluptatum deserunt eveniet neque
        dolores ipsam quas maxime? Ex doloribus et commodi molestias reiciendis
        deleniti nostrum. Nulla. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Natus inventore sequi aliquam, quasi, voluptatum
        deserunt eveniet neque dolores ipsam quas maxime? Ex doloribus et
        commodi molestias reiciendis deleniti nostrum. Nulla.
      </p>
    </div>
  );
}
