use axum::{extract::Json, http::StatusCode};

use crate::{
    agent::service,
    models::agent::{AnalyzeRequest, AnalyzeResponse},
};

pub async fn analyze(Json(request): Json<AnalyzeRequest>) -> (StatusCode, Json<AnalyzeResponse>) {
    let response = service::analyze(request);

    (StatusCode::OK, Json(response))
}
