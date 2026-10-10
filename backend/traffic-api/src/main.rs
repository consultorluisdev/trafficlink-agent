mod agent;
mod models;
mod routes;

use axum::{Router, routing::post};

#[tokio::main]
async fn main() {
    let app = Router::new().route("/api/agent/analyze", post(routes::analyze));
    //.route("/", get(|| async { "TRÁFICLINK Agent online" }));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    println!("TRÀFICLINK Agent running on http://localhost:3000");

    axum::serve(listener, app).await.unwrap();
}
