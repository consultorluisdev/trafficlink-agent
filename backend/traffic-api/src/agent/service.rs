use crate::models::agent::{AnalyzeRequest, AnalyzeResponse};

pub fn analyze(request: AnalyzeRequest) -> AnalyzeResponse {
    println!("conteudo analisando: {}", request.content);

    AnalyzeResponse {
        agent: "trafficlink".to_string(),
        status: "analyzed".to_string(),
        business: request.business,
        objective: request.objective,
        recommendation:
            "Criar conteudo destacando o produto e direcionar o cliente para o whatsApp."
                .to_string(),
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_analyze() {
        let request = AnalyzeRequest {
            business: "Test Business".to_string(),
            objective: "Test Objective".to_string(),
            content: "Test Content".to_string(),
        };

        let response = analyze(request);

        assert_eq!(response.agent, "trafficlink");
        assert_eq!(response.status, "analyzed");
        assert_eq!(response.business, "Test Business");
        assert_eq!(response.objective, "Test Objective");
    }
}
