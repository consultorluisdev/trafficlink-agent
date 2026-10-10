use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize)]
pub struct AnalyzeRequest {
    pub business: String,
    pub objective: String,
    pub content: String,
}
#[derive(Debug, Serialize)]
pub struct AnalyzeResponse {
    pub agent: String,
    pub status: String,
    pub business: String,
    pub objective: String,
    pub recommendation: String,
}
