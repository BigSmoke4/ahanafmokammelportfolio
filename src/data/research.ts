/**
 * Undergraduate thesis: Multi-stage deep learning framework for smartphone e-waste
 * classification, damage assessment, metal value estimation, and recycling recommendation.
 */

export interface BenchRow {
  model: string
  base: number
  tuned: number
}

export interface Chapter {
  id: string
  numeral: string
  title: string
  short: string
  paint: string
  art: number
}

export interface Research {
  id: string
  title: string
  subtitle: string
  institution: string
  submitted: string
  supervisor: string
  authors: string[]
  grade: string
  review: string[]
  keywords: string[]
  abstract: string
  stats: Array<{ value: string; label: string; unit?: string }>
  chain: Array<{
    step: string
    question: string
    facets: string[]
    text: string
  }>
  chainDetail: string
  corpus: Array<{ title: string; text: string }>
  corpusDetail: string
  bench: {
    eu: { title: string; rows: BenchRow[] }
    ea: { title: string; rows: BenchRow[] }
    note: string
  }
  trialDetail: string
  example: {
    prompt: string
    baseline: { model: string; text: string }
    tuned: { model: string; text: string }
  }
  voiceDetail: string
}

export const research: Research = {
  id: 'ewaste-thesis',
  title: 'Multi-Stage Deep Learning Framework for Smartphone E-Waste Classification',
  subtitle: 'Damage Assessment, Metal Value Estimation, and Recycling Recommendation',
  institution: 'BRAC University',
  submitted: 'June 2026',
  supervisor: 'MD. Khalilur Rahman (Prof), Riazul Islam Rifat (Lecturer)',
  authors: ['Ahanaf Mokammel Omi', 'Parijat Debnath Ratul', 'Abdullah Ibna Siddiquie', 'Tasnova Rahman', 'Anika Toushin Sinthia'],
  grade: 'B.Sc. Thesis',
  review: ['Department of CSE', 'BRAC University'],
  keywords: ['Smartphone E-Waste', 'Deep Learning', 'Vision Transformer', 'DINOv2', 'Swin V2', 'MaxViT', 'Image Classification', 'Metal Value Estimation', 'Recycling Recommendation'],

  abstract:
    'Five-stage deep learning pipeline for smartphone e-waste classification, damage assessment, metal value estimation, and recycling recommendation from a single image. Stage-A (DINOv2) achieves 91.91% accuracy for model classification. Stage-B (Swin V2) achieves 92.12% for condition assessment. Stage-C (MaxViT) achieves 94.67% for damage severity. Stage-D estimates recyclable metal value using MetalpriceAPI. Stage-E generates handling recommendations. ViT models outperformed CNN baselines by up to 15.78 percentage points.',

  stats: [
    { value: '5', label: 'pipeline stages' },
    { value: '15,097', label: 'total images' },
    { value: '94.67', unit: '%', label: 'best accuracy' },
    { value: '15.78', unit: 'pp', label: 'max improvement' },
    { value: '4', label: 'iPhone models' },
  ],

  /* the five-stage pipeline */
  chain: [
    {
      step: 'Stage-A',
      question: 'Device model?',
      facets: ['Classification', 'DINOv2', '91.91%'],
      text: 'Classifies iPhone 8, X, 11, 13 using DINOv2 with 91.91% accuracy.',
    },
    {
      step: 'Stage-B',
      question: 'Damaged?',
      facets: ['Condition', 'Swin V2', '92.12%'],
      text: 'Classifies normal/broken using Swin V2 with 92.12% accuracy.',
    },
    {
      step: 'Stage-C',
      question: 'Severity?',
      facets: ['Damage', 'MaxViT', '94.67%'],
      text: 'Classifies minor/major damage using MaxViT with 94.67% accuracy.',
    },
    {
      step: 'Stage-D',
      question: 'Value?',
      facets: ['Estimation', 'API', 'Hybrid'],
      text: 'Estimates metal value in BDT using database and MetalpriceAPI.',
    },
    {
      step: 'Stage-E',
      question: 'Action?',
      facets: ['Recommend', 'Rules', 'Decision'],
      text: 'Generates handling recommendation from rule engine.',
    },
  ],

  chainDetail: `Stage-A: Model Classification (DINOv2, 91.91%)
Stage-B: Condition Assessment (Swin V2, 92.12%)
Stage-C: Damage Severity (MaxViT, 94.67%)
Stage-D: Metal Value Estimation (API + CSV)
Stage-E: Handling Recommendations (rule engine)`,

  /* dataset and experiments */
  corpus: [
    { title: 'Dataset Collection', text: '15,097 images from online repositories and e-commerce listings.' },
    { title: 'Stage-A Dataset', text: '4,000 images across iPhone 8, X, 11, 13 (3,036 train, 482 val, 482 test).' },
    { title: 'Stage-B Dataset', text: '8,000 images normal/broken (7,036 train, 482 val, 482 test).' },
    { title: 'Stage-C Dataset', text: '3,097 images minor/major damage (2,197 train, 450 val, 450 test).' },
    { title: 'Data Augmentation', text: 'RandomResizedCrop, ColorJitter, RandomGrayscale, RandomErasing.' },
    { title: 'Model Comparison', text: 'CNN (DenseNet121), YOLO11x-cls, ViT (DINOv2, Swin V2, MaxViT).' },
    { title: 'Training Strategy', text: 'Transfer learning, progressive unfreezing, early stopping, AMP.' },
  ],

  corpusDetail: `Model comparison: CNN (DenseNet121) vs YOLO11x-cls vs ViT (DINOv2, Swin V2, MaxViT)

Results: Stage-A 91.91%, Stage-B 92.12%, Stage-C 94.67% (ViT best)
ViT improvement: +15.78 pp over CNN baselines
Training: 2e-05 LR, batch 16, AMP, early stopping
Data: 15,097 images, augmentation with RandomResizedCrop, ColorJitter, etc.
Reproducibility: Complete evidence package with checkpoints and scripts`,

  /* Model performance comparison */
  bench: {
    eu: {
      title: 'Classification Accuracy (Test Set)',
      rows: [
        { model: 'Stage-A', base: 76.13, tuned: 91.91 },
        { model: 'Stage-B', base: 78.34, tuned: 92.12 },
        { model: 'Stage-C', base: 78.89, tuned: 94.67 },
      ] as BenchRow[],
    },
    ea: {
      title: 'ViT vs CNN Improvement (pp)',
      rows: [
        { model: 'Stage-A', base: 0, tuned: 15.78 },
        { model: 'Stage-B', base: 0, tuned: 13.78 },
        { model: 'Stage-C', base: 0, tuned: 15.78 },
      ] as BenchRow[],
    },
    note: 'ViT models outperformed CNN baselines across all stages. Stage-C MaxViT-Tiny achieved 94.67% accuracy.',
  },

  trialDetail: `System: FastAPI backend + React frontend
Features: RESTful API, GPU inference, MetalpriceAPI integration
Pipeline: Sequential execution with conditional branching
Performance: 2-3 sec per image, 4GB GPU memory
Evidence: Complete datasets, checkpoints, configs, results
Reproduction: pip install requirements.txt, train scripts, evaluation
Deployment: API server + React web demo with drag-drop upload`,

  /* Example pipeline execution */
  example: {
    prompt: 'Input: Broken iPhone 11 image',
    baseline: {
      model: 'Manual Assessment',
      text: 'Traditional e-waste handling requires manual inspection, model identification, damage assessment, and value estimation - time-consuming and error-prone.',
    },
    tuned: {
      model: 'Automated Pipeline',
      text: 'Five-stage pipeline automatically classifies iPhone 11, detects broken condition, assesses damage severity, estimates value (e.g., 1,250 BDT), and recommends handling in seconds.',
    },
  },

  voiceDetail: `Achievements: 5-stage pipeline, 94.67% accuracy, +15.78 pp over CNN
Contributions: 15,097 images, ViT vs CNN vs YOLO comparison, open-source
Limitations: 4 iPhone models, binary classification, literature-based values
Future: Android support, multi-class severity, mobile app, edge deployment
Impact: Reduced manual inspection, improved value estimation, standardized handling
Applications: Waste management, environmental sustainability, recycling operations`,
}

export const chapters: Chapter[] = [
  { id: 'thesis', numeral: 'I', title: 'The Thesis', short: 'Thesis', paint: '#f14352', art: 4 },
  { id: 'chain', numeral: 'II', title: 'The Pipeline', short: 'Pipeline', paint: '#ea6c1b', art: 12 },
  { id: 'corpus', numeral: 'III', title: 'The Data', short: 'Data', paint: '#d4a900', art: 7 },
  { id: 'trial', numeral: 'IV', title: 'The Results', short: 'Results', paint: '#0c8e5e', art: 14 },
  { id: 'voice', numeral: 'V', title: 'The System', short: 'System', paint: '#3a96aa', art: 9 },
]
