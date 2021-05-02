const adminmodel = require('../model/admin')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    adminmodel.create(data)
    .then (() => resolve({
        status: true,
        pesan: 'berhasil input admin'
    })).catch(() => reject ({
        status: false,
        pesan: 'gagal input admin'
    }))
})

exports.update = (id,data) =>
new Promise (( resolve, reject) => {
    console.log(id)
    try {
        adminmodel.updateOne({
            _id : objectid(id)
        }, data).then(() =>{
            resolve({
                status: true,   
                pesan: 'Berhasil Mengubah Data'
            })
        }).catch((err) => {
            console.log(err)
            reject({
                status: false,
                pesan: 'gagal mengubah Data'
            })
        })
    } catch (error) {
        console.log(error)
    }
})

exports.showAllData = () =>
new Promise(( resolve, reject) => {
    adminmodel.find()
    .then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            data: result
        })
    }).catch((err) => {
        console.log(err)
        reject ({
           status: false,
           pesan: 'Gagal Menampilkan Data',
           data: []
       })
    })
})

exports.showDataByID = (id) =>
new Promise((resolve, reject) => {
    adminmodel.findOne({
        _id : objectid(id)
    }).then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            data: result
        })
    }).catch (() => reject ({
        status: false,
        pesan: 'Gagal Menampilkan Data',
        data: null
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) => {
    adminmodel.deleteOne({
        _id : objectid(id)
    }).then(() => resolve ({
        status: true,
        pesan: 'Berhasil menghapus Data'
    })).catch(() => ({
        status: false,
        pesan: 'gagal menghapus data'
    }))
})