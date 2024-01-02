// import React from 'react'

import { Link } from "react-router-dom";
import PostAuthor from "../../components/PostAuthor";
import Thumbnail from "../../mern-blog/blog23.jpg";
const PostDetails = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_btns">
            <Link to={`/posts/avddvv/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/avddvv/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is Post Title</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          reiciendis omnis id accusamus at cum ipsam voluptas, aspernatur, fuga
          placeat suscipit quam debitis, explicabo eaque. Sit quae rem fugiat
          alias, similique vero quam temporibus, ducimus voluptatum odit
          pariatur. Impedit, dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt
          ut impedit iure in aliquam aspernatur necessitatibus velit, nisi animi
          fugiat ipsa dolores harum sed quasi dolorem odit ipsum, non nam aut?
          Cum fugiat culpa laudantium explicabo cupiditate dignissimos,
          doloribus natus. Doloribus saepe, itaque pariatur suscipit architecto
          rerum aut quod officia vero. Deleniti, omnis facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos placeat
          rem sequi sit. Quia laborum modi eos iure, delectus earum minus!
          Explicabo officiis nobis sint adipisci nulla nesciunt id. Nobis, modi
          voluptatibus. Quod delectus deserunt recusandae dolor dolorem fuga
          labore possimus eveniet maiores accusantium, porro suscipit corporis
          tempora fugit tenetur ducimus natus sunt unde! Eius, velit? Fuga
          tenetur adipisci debitis dolore repellat inventore ducimus voluptatem
          officiis ex sit tempore quod placeat, sunt odit eius ab laudantium
          dignissimos veniam minima architecto quas distinctio repellendus nisi.
          Nihil reprehenderit repellendus, sint atque eaque totam, incidunt
          fugit, aliquam rerum maxime expedita in ipsa. Quia accusantium
          exercitationem aperiam mollitia ut amet in quam perferendis, voluptas
          numquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque
          corrupti est veniam temporibus totam, error sit mollitia perferendis
          dignissimos explicabo excepturi laudantium? Vel modi repellat nisi
          veniam illum et, amet nam ex, minus laboriosam sit! Corrupti, mollitia
          aliquam error quibusdam natus saepe harum, aperiam sint, ex enim
          doloremque. Iste quos ab totam hic iusto blanditiis facilis neque quam
          quibusdam. Aliquid unde dolore totam nemo consequuntur sed fugit quas
          veniam sunt ipsum reiciendis saepe nihil amet asperiores, dignissimos
          accusamus, quod corporis tenetur, culpa ex temporibus eos in odio
          quibusdam. Eum voluptatem, et vitae maxime pariatur nulla adipisci.
          Autem eveniet soluta sed maiores numquam in tenetur, fugit impedit
          voluptate vel. Harum veritatis assumenda exercitationem officia iusto
          libero veniam dignissimos ad repudiandae sint sed, dicta pariatur ab
          quae aspernatur modi nihil sapiente eligendi architecto illo accusamus
          alias aliquam? Numquam tempora nesciunt eveniet, perferendis
          reprehenderit voluptatum itaque dignissimos illo saepe pariatur est
          rem eaque odio dolore debitis amet consequatur impedit dolor
          architecto molestias doloremque blanditiis accusantium! Aliquam ad
          reiciendis repellendus numquam doloribus ipsam sequi. Esse, ut modi?
          Aspernatur, officiis suscipit at, architecto illum ipsa est vero ea
          soluta perspiciatis illo voluptates iusto culpa ipsum incidunt. In
          eos, consectetur quisquam nam quam necessitatibus laborum!
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
