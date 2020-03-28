import React, { Component } from "react";

class Assignment1 extends Component {
  myData = [
    {
      name: "Fayha",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/19/08/36/natural-4946737_1280.jpg",
      isMale: false,
      isLike: true,
      isComment: false,
      isShare: true,
      image:
        "https://cdn.pixabay.com/photo/2020/02/16/07/55/thailand-4852830_1280.jpg"
    },
    {
      name: "Anjeha",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/11/01/13/sunset-4920663_1280.jpg",
      isMale: false,
      isLike: true,
      isComment: true,
      isShare: false,
      image:
        "https://cdn.pixabay.com/photo/2020/01/20/20/58/building-4781384__480.jpg"
    },
    {
      name: "Arham",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/17/01/55/background-4938749__480.jpg",
      isMale: true,
      isLike: true,
      isComment: true,
      isShare: false,
      image:
        "https://cdn.pixabay.com/photo/2020/03/19/04/58/coconut-trees-4946270__480.jpg"
    },
    {
      name: "Aleena",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/19/02/13/forsythia-4945981__480.jpg",
      isMale: false,
      isLike: true,
      isComment: false,
      isShare: true,
      image:
        "https://cdn.pixabay.com/photo/2020/03/17/16/01/hamster-shopping-4940922__480.jpg"
    },
    {
      name: "Adeefa",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/20/23/27/paprika-4952248__480.jpg",
      isMale: false,
      isLike: true,
      isComment: true,
      isShare: true,
      image:
        "https://cdn.pixabay.com/photo/2020/03/15/12/41/tulips-4933492__480.jpg"
    },
    {
      name: "Zoha",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/19/18/36/ringdove-4948319__480.jpg",
      isMale: false,
      isLike: true,
      isComment: false,
      isShare: false,
      image:
        "https://cdn.pixabay.com/photo/2020/03/12/13/27/rose-4925102__480.jpg"
    },
    {
      name: "Adeena",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/18/01/46/background-4942349__480.jpg",
      isMale: false,
      isLike: true,
      isComment: false,
      isShare: true,
      image:
        "https://cdn.pixabay.com/photo/2020/03/19/16/36/swan-4947984__480.jpg"
    },
    {
      name: "Fariha",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/20/05/58/pineapple-4949625__480.jpg",
      isMale: false,
      isLike: true,
      isComment: true,
      isShare: false,
      image:
        "https://cdn.pixabay.com/photo/2020/03/13/11/57/tulips-4927755_1280.jpg"
    },
    {
      name: "Maida",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/01/15/30/fox-4893199__480.jpg",
      isMale: false,
      isLike: true,
      isComment: false,
      isShare: true,
      image:
        "https://cdn.pixabay.com/photo/2020/03/19/01/16/moon-4945895__480.jpg"
    },
    {
      name: "Minha",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/07/11/54/the-fog-4909513__480.jpg",
      isMale: false,
      isLike: true,
      isComment: true,
      isShare: false,
      image:
        "https://cdn.pixabay.com/photo/2020/03/17/07/44/covid-19-4939288__480.jpg"
    },
    {
      name: "Mahad",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/03/20/31/laguna-4899802__480.jpg",
      isMale: true,
      isLike: true,
      isComment: true,
      isShare: false,
      image:
        "https://cdn.pixabay.com/photo/2020/03/19/12/20/cobweb-4947379__480.jpg"
    },
    {
      name: "Shahvir",
      descr: "Public Service Message",
      profilepic:
        "https://cdn.pixabay.com/photo/2020/03/17/16/37/landscape-4941044__480.jpg",
      isMale: true,
      isLike: true,
      isComment: false,
      isShare: true,
      image:
        "https://cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931_1280.jpg"
    }
  ];

  rMenuData = [
    { item: "Your Pages" },
    { item: "Subscriptions" },
    { item: "Sponsored" },
    { item: "Language" }
  ];

  lMenuData = [
    { item: "SauZ Khan" },
    { item: "News Feed" },
    { item: "Messenger" },
    { item: "Watch" }
  ];

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ justifyContent: "center", width: "15rem" }}>
            {this.lMenuData.map(ldata => {
              return <p>{ldata.item}</p>;
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
          }}
        >
          {this.myData.map(data => {
            return (
              <div className="card" style={{ width: "50rem" }}>
                <div class="card-body">
                  <div>
                    <p
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "40px",
                        display: "flex",
                        float: "left"
                      }}
                    >
                      <img
                        src={data.profilepic}
                        class="card-img-top"
                        style={{ borderRadius: "50%" }}
                        alt="..."
                      />
                    </p>
                    <h5 class="card-title">
                      {data.name} updated {data.isMale == true ? "his" : "her"}{" "}
                      profile picture.
                    </h5>
                  </div>
                  <p class="card-text"> {data.descr}</p>
                  <img src={data.image} class="card-img-top" alt="..." />
                  {data.isLike == true ? (
                    <a href="#" class="btn btn-primary">
                      Like
                    </a>
                  ) : null}
                  &nbsp;
                  {data.isComment == true ? (
                    <a href="#" class="btn btn-primary">
                      Comment
                    </a>
                  ) : null}
                  &nbsp;
                  {data.isShare == true ? (
                    <a href="#" class="btn btn-primary">
                      Share
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", border: "5px" }}
        >
          <div
            style={{
              width: "25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            {this.rMenuData.map(rdata => {
              return <p>{rdata.item}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment1;
