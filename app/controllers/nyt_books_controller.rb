class NytBooksController < ActionController::API
  def index
    # fetch data from external api
    Rails.cache.fetch("nyt_books", expires_in: 12.hours) do
      response = RestClient.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=#{ENV['NYT_API_KEY']}")
      res = JSON.parse(response.body)
      books = res['results']['books'].map do |book|
        cleanBook = book.slice('title', 'author', 'description', 'book_image', 'amazon_product_url')
        cleanBook['imageUrl'] = cleanBook.delete('book_image')
        cleanBook['link'] = cleanBook.delete('amazon_product_url')
        cleanBook['id'] = SecureRandom.uuid;
        cleanBook
      end
      render json: books
    end
  end
end
