class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :post_title
      t.string :post_content
      t.timestamps
    end
  end
end
