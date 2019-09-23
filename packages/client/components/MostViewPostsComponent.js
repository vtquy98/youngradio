import React from 'react';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {} from '../store/CategoryState';
// eslint-disable-next-line no-unused-vars
import PostCardComponent from './PostCardComponent';
// const connectToRedux = connect(
//   createStructuredSelector(
//     {
//       categories: getAllCategorySelector
//     },
//     dispatch => ({
//       getAllCategory: () => {
//         dispatch(getAllCategory());
//       }
//     })
//   )
// );

const mockBlogPosts = [
  {
    col: '6',
    category: 'đời sống',
    title: 'Cuộc đời có thật sự bất công với bạn?',
    description:
      'Tôi năm nay 30, sống ngót nghét cũng được nửa cuộc đời rồi chứ gì nữa, vậy mà chẳng có gì ra hồn cả. Người ta vẫn nói "chênh vênh tuổi 30", nghe nó thật buồn cười  nhỉ, đáng lẽ ra con người ta, tuổi 30 là tuổi ổn định, không công việc ổn định thì cũng có một gia đình nhỏ để sớm tối quay quần rồi. ',
    image: "url('/static/material/assets/img/examples/office2.jpg')"
  },
  {
    col: '6',
    category: 'đời sống',
    title: 'Vu lan này, con bùi ngùi cài lên ngực áo một cành hoa',
    description:
      'Bao nhiêu năm còn nhỏ, ta thấy áo cha ướt đẫm buổi tan tầm. Mùi mồ hôi nồng nồng chua chua thấm trên người cha.Với người khác đó là mùi khó chịu nhưng với con của cha thì đó là mùi thương yêu. Ta đến trường trên chiếc xe đạp lọc cọc sau cha, mắt cha nheo lại vì đồi cao dốc đứng.',
    image: "url('/static/material/assets/img/examples/office2.jpg')"
  },
  {
    col: '12',
    category: 'đời sống',
    title: 'Nhặt nhạnh ký ức tuổi thơ',
    description:
      'Khi tôi lớn hơn một chút, tôi ít nói cười hơn, tôi cũng chẳng tâm sự với bà nhiều nữa. Bà hay dặn dò tôi, chỉ bảo tôi.Tôi cảm thấy tôi càng lớn, bà càng khó, cách bà thương con, thương cháu cũng giống với những người bà người mẹ làng quê nhỏ ngày xưa.',
    image: "url('/static/material/assets/img/examples/office2.jpg')"
  }
];
class MostViewPostsComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }
  render() {
    return (
      <div className="row">
        {mockBlogPosts.map((item, index) => (
          <PostCardComponent
            col={item.col}
            category={item.category}
            title={item.title}
            description={item.description}
            image={item.image}
            key={index}
          />
        ))}
        <style jsx>{`
          .background-1 {
            background-image: url('/static/material/assets/img/examples/office2.jpg');
          }
          .background-2 {
            background-image: url('/static/material/assets/img/examples/blog8.jpg');
          }
          .background-3 {
            background-image: url('/static/material/assets/img/examples/card-project6.jpg');
          }
        `}</style>
      </div>
    );
  }
}

export default MostViewPostsComponent;