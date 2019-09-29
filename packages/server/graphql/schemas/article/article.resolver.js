import { path } from 'lodash/fp';
module.exports = {
  Article: {
    createdAt: path('created_at'),
    updatedAt: path('updated_at'),
    imageDescription: path('image_description'),
    authorId: path('author_id'),
    categoryId: path('category_id'),
    isVerified: path('is_verified')
  }
};
