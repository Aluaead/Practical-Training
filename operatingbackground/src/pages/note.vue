<template>
  <base-page index="3">
    <template slot="content">
      <el-row class="warp">
        <el-col :span="24" class="warp-breadcrum">
          <!--搜索栏-->
          <el-col :span="24" class="toolbar">
            <el-form :inline="true" :model="filters" class="form">
              <el-form-item>
                <template>
                  <el-select v-model="filters.type" placeholder="请选择">
                    <el-option
                      v-for="item in typeData"
                      :key="item.index"
                      :label="item.label"
                      :value="item.label"
                    ></el-option>
                  </el-select>
                </template>
              </el-form-item>
              <el-form-item>
                <el-input v-model="filters.name" placeholder="请输入关键字"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="getUser">搜索</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="get">添加</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="exportExcel">导出</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-col>
        <div class="my-el-table">
          <el-table
            id="out-table"
            :data="data"
            stripe
            border
            style="width:100%"
            v-loading="listLoading"
          >
            <el-table-column prop="noteid" label="文章ID"></el-table-column>
            <el-table-column prop="anthologyname" label="所属文集" width="200"></el-table-column>
            <el-table-column prop="username" label="发表人"></el-table-column>
            <el-table-column prop="notecategory" label="文章类别"></el-table-column>
            <el-table-column prop="notecontent" label="文章内容" width="400"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="props">
                <el-button size="small" type="primary" @click="lookUser(props.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-row>
      <el-col :span="24" class="toolbar block">
        <el-pagination
          @size-change="handleSizeChange(val)"
          @current-change="handleCurrentChange"
          :current-page="4"
          :page-size="7"
          layout="total, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </template>
  </base-page>
</template>
<script>
import BasePage from "@/components/BasePage";
import request from "@/http/request.js";
import URL from "@/http/url.js";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  name: "note",

  components: {
    "base-page": BasePage
  },

  data() {
    return {
      filters: {
        name: "",
        type: "全部"
      },
      total: 0,
      pageNum: 1,
      listLoading: false,
      typeData: [],
      data: []
    };
  },
  mounted() {
    //初始化
    const islogin = localStorage.getItem("isLogin");
    if (islogin) {
      this.typeInfo(); //分类初始化
      this.noteInfo(); //初始化列表
      this.totalInfo();
    } else {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    getUser() {
      this.noteInfo();
      this.totalInfo();
    },
    //下拉框初始化
    typeInfo() {
      this.typeData = [
        { value: 1, label: "全部" },
        { value: 2, label: "文字" },
        { value: 3, label: "图文" },
        { value: 4, label: "音乐" }
      ];
    },
    get() {
      return request({
        url: URL.userdata + "/add",
        method: "POST",
        data: {
          id: 1008,
          name: "李文轩",
          password: "123456",
          phone: "15232780628",
          email: "1076843408@qq.com"
        }
      }).then(res => {
        console.log(res);
        return res;
      });
    },
    //数据初始化
    noteInfo() {
      return request({
        url: URL.notedata + "/paging",
        method: "POST",
        data: {
          page: 1,
          notecategory: this.filters.type
        }
      }).then(res => {
        this.data = res.data.data;
        console.log(res.data);
        return res;
      });
    },
    //文章数量
    totalInfo() {
      return request({
        url: URL.notedata + "/notecount",
        method: "POST",
        data: {
          notecategory: this.filters.type
        }
      }).then(res => {
        this.total = res.data[0].count;
        return res;
      });
    },
    //查看用户信息
    lookUser(data) {
      localStorage.setItem("key", JSON.stringify(data));
      const obj = JSON.parse(localStorage.getItem("key"));
      this.$router.push({
        path: "/note/eidt",
        name: "eidt",
        params: { notedata: obj }
      });
    },
    //数据导出excel表格
    exportExcel() {
      /* generate workbook object from table */

      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      /* get binary string as output */

      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "用户.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
      console.log(wbout);
    },

    //数据分页
    handleSizeChange(val) {
      console.log(val)
    
    },
    handleCurrentChange(val) {
      return request({
        url: URL.notedata + "/paging",
        method: "POST",
        data: {
          page: val,
          notecategory: this.filters.type
        }
      }).then(res => {
        this.data = res.data.data;
        return res;
      });
    }
  }
};
</script>
<style>
.el-form-item {
  margin: 0.7rem !important;
}
.el-table td,
.el-table th {
  padding: 0.6rem 0 !important;
  text-align: center;
}
.el-table__row {
  height: 3.5rem;
}
.cell{
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}
/* .el-pagination {
  padding-top: 5px;
} */
.form {
  width: 100% !important;
}
</style>