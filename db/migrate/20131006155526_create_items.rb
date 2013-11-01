class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :num
      t.integer :cost

      t.timestamps
    end
  end
end
