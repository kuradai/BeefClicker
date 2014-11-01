class ApisController < ApplicationController
  def calculated

    count = 0
    nowtime = DateTime.new(2014, 11, 2, 00, 00)
    @counts = Hash.new()
    datasets = Array.new()
    Item.all.each do|item|
     
      if item.created_at.day == nowtime.day && item.created_at.hour == nowtime.hour && (item.created_at.min/10) == (nowtime.min/10)
        count += item.num
        @counts.store("#{item.created_at.strftime("%Y-%m-%dT%H")}:#{item.created_at.strftime("%M")[0...1]}0", count)
      else       
        nowtime = item.created_at
        #count = item.num
      end
    end
    
    @counts.each{|key,val|
      temp = Array.new()
      temp.push(key,val)
      datasets.push(temp)
    }

    render :json => datasets

  end
end


