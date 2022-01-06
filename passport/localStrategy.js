const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const bcrypt=require('bcrypt');
const User=require('../models/user');

module.exports=()=>{
    passport.use(new LocalStrategy({
        usernameField:'email',
        passportField:'password',
    },async(email, passport, done)=>{
        try{
            const exUser=await User.findOne({where:{email}});
            console.log('email', email);
            if(exUser){
                const reqult=await bcrypt.compare(password, exUser.password);
                if(result){
                    done(null, exUser);
                }
            }
            else{
                done(null, false,{message:'비밀번호가 일치하지 않습니다.'});
            }
        }catch(error){
            console.error(error);
            done(error);
        }
    }));
}