export default {
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'book_name',
        title: 'Book Name',
        type: 'string',
        validation: Rule => Rule.required().error('Book name is required'),
      },
      {
        name: 'author_name',
        title: 'Author Name',
        type: 'string',
        validation: Rule => Rule.required().error('Author name is required'),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.min(0).error('Price must be a positive number'),
      },
      {
        name: 'book_cover',
        title: 'Book Cover',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping in the Sanity Studio
        },
        validation: Rule => Rule.required().error('Book cover image is required'),
      },
    ],
  };