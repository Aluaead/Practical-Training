import {HTTP} from '../utils/util'

class ClassicModel extends HTTP{
    getLatest(){
      return this.request({
            url:'notes',
          })
    }
  getClassic(index,nextOrPrevious){
      console.log(index,nextOrPrevious)
        return this.request({
          url: 'notes/getnextorpre',
          method:'POST',
          data:{
            NextOrPre:nextOrPrevious,
            index:index
          },
         
      })
    }
  
  

  isFirst(index){
    let firstIndex = this._getLatestIndex()
    console.log(index)
    return firstIndex == index?true:false
  }

  isLatest(index){
    return index == 1 ? true:false
  }

  _setLatestIndex(index){
    wx.setStorageSync('latest',index)
  }

  _getLatestIndex(){
    return this.request({
      url:'notes/maxindex'
    })
  }

  _getKey(index){
    let key = 'classic-'+index
    return key
  }

}
export {ClassicModel}