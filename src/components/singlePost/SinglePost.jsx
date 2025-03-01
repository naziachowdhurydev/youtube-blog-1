import "./singlePost.css";

export default function SinglePost() {
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Safak</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem
            nesciunt consequuntur, tenetur doloribus eligendi quaerat iusto
            dolorum neque beatae doloremque autem magnam similique minus maiores
            delectus illum dicta, dolore ab debitis? Hic commodi eligendi
            similique consectetur mollitia, vero repellat odio alias explicabo
            incidunt dolorum deleniti repudiandae molestias tempora sequi eaque
            quidem necessitatibus laborum ea? Sequi corporis rem expedita minima
            ullam odio ducimus placeat eum inventore laboriosam pariatur,
            dignissimos esse veritatis eligendi quia unde optio officiis
            suscipit reprehenderit deserunt nobis similique iste quam! Quis, non
            deleniti reiciendis et expedita, aliquam, modi temporibus
            repudiandae ex perspiciatis libero numquam ab. Nam, maxime? placeat
            eum inventore laboriosam pariatur, dignissimos esse veritatis
            eligendi quia unde optio officiis suscipit reprehenderit deserunt
            nobis similique iste quam! Quis, non deleniti reiciendis et
            expedita, aliquam, modi temporibus repudiandae ex perspiciatis
            libero numquam ab. Nam, maxime?
          </p>
        </div>
      </div>
    </>
  );
}
