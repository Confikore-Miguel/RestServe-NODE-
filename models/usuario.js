const { Schema, model } =require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required:[true,'El nombres es obligatorio']
    },
    correo:{
        type: String,
        required:[true,'El correo es obligatorio'],
        //Unico que no se puede repetir 
        unique: true
    },
    password:{
        type: String,
        required:[true,'La contraseña es obligatorio'],
    },
    img:{
        type: String
    },
    rol:{
        type: String,
        required:true,
        default:'USER_ROLE',
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default:false
    },

});

UsuarioSchema.methods.toJSON = function() {
    const { __v, password,_id, ...usuario} = this.toObject();
    usuario.uid= _id;
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );

