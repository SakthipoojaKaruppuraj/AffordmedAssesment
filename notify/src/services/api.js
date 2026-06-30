import axios from "axios";

const API = axios.create({
    baseUrl = "http://4.224.186.213/evaluation-sevice/"
});

export const getnotifications = async(token) => {
    const response = await API.get("/notifications",{
        headers:{
            Authorisation : 'Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYWt0aGlwb29qYTQwNDdAZ21haWwuY29tIiwiZXhwIjoxNzgyNzk4NzA5LCJpYXQiOjE3ODI3OTc4MDksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmNzg2MTVkYi1jNDkwLTRjMGYtODI2ZS1hM2EzNmYwYWFkOWYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzYWt0aGkgcG9vamEgayIsInN1YiI6IjJhNmRjOWYyLTBlZTQtNDI5Zi04OTRlLTU2ZjM4ZTI2MzdmZiJ9LCJlbWFpbCI6InNha3RoaXBvb2phNDA0N0BnbWFpbC5jb20iLCJuYW1lIjoic2FrdGhpIHBvb2phIGsiLCJyb2xsTm8iOiIyM2FpYjE4IiwiYWNjZXNzQ29kZSI6IldqTnlDVCIsImNsaWVudElEIjoiMmE2ZGM5ZjItMGVlNC00MjlmLTg5NGUtNTZmMzhlMjYzN2ZmIiwiY2xpZW50U2VjcmV0IjoiS01UYUV2eWd1Q2ZqWHJBayJ9.jY4yqnp5XSYn4LeToko1V6ERtCEYT0uKQLhh0Hf3fbA}',
        }
    });
    return response.data.notification;
};