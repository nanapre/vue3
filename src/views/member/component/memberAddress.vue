<script setup>
import { onMounted, ref } from 'vue';
import { getUserAddressAPI, updateUserAddressAPI, createUserAddressAPI, deleteUserAddressAPI } from '@/apis/user';
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'

const tableData = ref([])
const showUpdate = ref(false)
const showCreate = ref(false)

const updateAddressForm = ref({
    receiver: '',
    contact: '',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
    address: '',
    isDefault: '0',
    fullLocation: '',
    postalCode: '',
    addressTags: ''
})
const createAddressForm = ref({
    receiver: '',
    contact: '',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
    address: '',
    isDefault: '0',
    fullLocation: '',
    postalCode: '',
    addressTags: ''
})
const formLabelWidth = '140px'
const getUserAddress = async () => {
    let res = await getUserAddressAPI()
    tableData.value = res.data.result
    tableData.value.map(item => {
        return item.isDefault = item.isDefault === 0 ? '默认地址' : '普通地址'
    })
}
//修改地址
const openDialog = (row) => {
    updateAddressForm.value = { ...row };
    updateAddressForm.value.isDefault = updateAddressForm.value.isDefault === 0 ? '默认地址' : '普通地址';
    showUpdate.value = true;
};

const updateComfirm = async () => {
    showUpdate.value = false;
    let res = await updateUserAddressAPI(updateAddressForm.value.id, updateAddressForm.value)
    if (res.status === 200) {
        ElMessage({ type: 'success', message: '地址已修改' })
        getUserAddress()
    }
}

const handleSelectChange = (value) => {
    updateAddressForm.value.isDefault = value
};
//添加地址
const createArress = () => {
    showCreate.value = true
}

const creatHandleSelectChange = (value) => {
    createAddressForm.value.isDefault = value
};

const createComfirm = async () => {
    let res = await createUserAddressAPI(createAddressForm.value)
    if (res.status === 200) {
        ElMessage({ type: 'success', message: '新地址已添加' })
        getUserAddress()
    }
    showCreate.value = false
}

//删除地址
const deleteArress = async (row) => {
    let res = await deleteUserAddressAPI(row.id)
    console.log(res)
    if (res.status === 200) {
        ElMessage({ type: 'success', message: '地址已删除' })
        getUserAddress()
    }
}

onMounted(() => getUserAddress())


</script>
<template>
    <div style="background-color: #f5f5f5;">
        <el-button type="primary" class="button" @click="createArress">添加地址</el-button>
        <el-table :data="tableData" height="60vh" style="width: 100%" border>
            <el-table-column prop="receiver" label="姓名" width="180" align="center" />
            <el-table-column prop="contact" label="联系方式" width="180" align="center" />
            <el-table-column prop="address" label="详细地址" align="center" />
            <el-table-column prop="isDefault" label="地址类型" align="center" />
            <el-table-column label="操作" align="center">
                <template #default="scope">
                    <el-button @click="openDialog(scope.row)">编辑</el-button>
                    <el-button @click="deleteArress(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>

    <!-- 修改地址弹窗 -->
    <el-dialog v-model="showUpdate" title="修改地址" width="500">
        <el-form :model="updateAddressForm">
            <el-form-item label="收件人姓名" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.receiver" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人联系电话" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.contact" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人省份编码" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.provinceCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人城市编码" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.cityCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人地区编码" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.countyCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人详细地址" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.address" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人地址类型" :label-width="formLabelWidth">
                <el-select v-model="updateAddressForm.isDefault" @change="handleSelectChange">
                    <el-option label="默认地址" :value="0" />
                    <el-option label="普通地址" :value="1" />
                </el-select>
            </el-form-item>
            <el-form-item label="收件人完整地址" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.fullLocation" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人邮政编码" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.postalCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人地址标签" :label-width="formLabelWidth">
                <el-input v-model="updateAddressForm.addressTags" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="showUpdate = false">取消</el-button>
                <el-button type="primary" @click="updateComfirm">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
    <!-- 添加地址弹窗 -->
    <el-dialog v-model="showCreate" title="修改地址" width="500">
        <el-form :model="createAddressForm">
            <el-form-item label="收件人姓名" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.receiver" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人联系电话" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.contact" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人省份编码" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.provinceCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人城市编码" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.cityCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人地区编码" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.countyCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人详细地址" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.address" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人地址类型" :label-width="formLabelWidth">
                <el-select v-model="createAddressForm.isDefault" @change="creatHandleSelectChange">
                    <el-option label="默认地址" :value="0" />
                    <el-option label="普通地址" :value="1" />
                </el-select>

            </el-form-item>
            <el-form-item label="收件人完整地址" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.fullLocation" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人邮政编码" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.postalCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="收件人地址标签" :label-width="formLabelWidth">
                <el-input v-model="createAddressForm.addressTags" autocomplete="off" />
            </el-form-item>

        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="showCreate = false">取消</el-button>
                <el-button type="primary" @click="createComfirm">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<style lang="scss">
.button {
    margin-bottom: 0.5em;
    width: 8%;
    float: right
}
</style>
